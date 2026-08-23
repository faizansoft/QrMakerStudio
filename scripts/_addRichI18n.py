"""Dev helper: splice one page's translations into the five locale modules.

Reads a JSON blob on stdin of the shape:
    { "path": "/foo", "es": {...}, "ar": {...}, "hi": {...}, "tr": {...}, "vi": {...} }
and inserts each locale's object into scripts/richContentI18n/<locale>.js under
that path key, keeping the file valid JS. Idempotent: re-running replaces the
existing entry for that path rather than duplicating it.

Not part of the build — authoring convenience only.
"""
import io, json, re, sys

# Read from a file path, not stdin: on Windows stdin decodes as cp1252 and
# mangles non-Latin scripts into unpaired surrogates.
data = json.load(io.open(sys.argv[1], encoding='utf-8'))
path = data.pop('path')

def js_str(s):
    return "'" + s.replace('\\', '\\\\').replace("'", "\\'").replace('\n', '\\n') + "'"

def emit(v, ind):
    pad = '  ' * ind
    if isinstance(v, str):
        return js_str(v)
    if isinstance(v, (int, float)):
        return str(v)
    if isinstance(v, list):
        if v and all(isinstance(x, str) for x in v):
            inner = (',\n' + pad + '  ').join(js_str(x) for x in v)
            return '[\n' + pad + '  ' + inner + '\n' + pad + ']'
        items = (',\n' + pad + '  ').join(emit(x, ind + 1) for x in v)
        return '[\n' + pad + '  ' + items + '\n' + pad + ']'
    if isinstance(v, dict):
        parts = []
        for k, val in v.items():
            key = k if re.match(r'^[A-Za-z_$][\w$]*$', k) else js_str(k)
            parts.append(key + ': ' + emit(val, ind + 1))
        return '{\n' + pad + '  ' + (',\n' + pad + '  ').join(parts) + '\n' + pad + '}'
    raise TypeError(type(v))

for loc in ['es', 'ar', 'hi', 'tr', 'vi']:
    if loc not in data:
        continue
    f = 'scripts/richContentI18n/%s.js' % loc
    s = io.open(f, encoding='utf-8').read()

    key = "  '%s': " % path
    if key in s:  # replace existing entry
        start = s.index(key)
        i = s.index('{', start)
        depth, j = 0, i
        while True:
            if s[j] == '{':
                depth += 1
            elif s[j] == '}':
                depth -= 1
                if depth == 0:
                    break
            j += 1
        end = j + 1
        if s[end:end + 1] == ',':
            end += 1
        s = s[:start] + key + emit(data[loc], 1) + ',' + s[end:]
    else:  # insert as first entry
        anchor = 'export const RICH_CONTENT = {\n'
        s = s.replace(anchor, anchor + key + emit(data[loc], 1) + ',\n', 1)

    io.open(f, 'w', encoding='utf-8').write(s)

print('spliced %s into %d locales' % (path, sum(1 for l in ['es','ar','hi','tr','vi'] if l in data)))
