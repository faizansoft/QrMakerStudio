"""Dev helper: apply title/description length fixes to routeMetaI18nData.js.

Takes a JSON file of {locale: {path: {title?, description?}}} and rewrites just
those fields in place, leaving the rest of the file (and its comments) intact.

Not part of the build — authoring convenience only.
Usage: python scripts/_applyMetaFix.py <patch.json>
"""
import io
import json
import re
import sys

patch = json.load(io.open(sys.argv[1], encoding='utf-8'))

PATH = 'scripts/routeMetaI18nData.js'
src = io.open(PATH, encoding='utf-8').read()


def js_literal(value):
    escaped = value.replace('\\', '\\\\').replace("'", "\\'")
    return "'" + escaped + "'"


applied = 0
missed = []

for locale, pages in patch.items():
    header = re.search(r'\n  ' + locale + r': \{\n', src)
    if not header:
        missed.append('locale:' + locale)
        continue

    block_start = header.end()
    following = re.search(r'\n  (?:es|ar|hi|tr|vi): \{\n', src[block_start:])
    block_end = block_start + (following.start() if following else len(src[block_start:]))
    block = src[block_start:block_end]

    for path, fields in pages.items():
        entry = re.search(r"    '" + re.escape(path) + r"': \{\n", block)
        if not entry:
            missed.append(locale + path)
            continue

        entry_start = entry.end()
        rest = block[entry_start:]
        entry_end = entry_start + (rest.index('\n    }'))
        body = block[entry_start:entry_end]

        for field, value in fields.items():
            found = re.search(r"(      " + field + r": )('(?:[^'\\]|\\.)*')", body)
            if not found:
                missed.append(locale + path + '.' + field)
                continue
            body = body[:found.start(2)] + js_literal(value) + body[found.end(2):]
            applied += 1

        block = block[:entry_start] + body + block[entry_end:]

    src = src[:block_start] + block + src[block_end:]

io.open(PATH, 'w', encoding='utf-8').write(src)
print('applied %d field replacements' % applied)
if missed:
    print('MISSED:', missed)
