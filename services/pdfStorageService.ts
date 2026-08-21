import { supabase } from './supabaseClient';

export interface UploadPdfResult {
  url: string | null;
  error: string | null;
  fileName?: string;
  fileSize?: number;
}

/**
 * Uploads a PDF file to the public Supabase 'pdf_documents' bucket
 * and returns the permanent public URL.
 */
export async function uploadPdfToSupabase(file: File): Promise<UploadPdfResult> {
  try {
    const maxBytes = 10 * 1024 * 1024; // 10MB limit
    if (file.size > maxBytes) {
      const sizeMB = (file.size / (1024 * 1024)).toFixed(1);
      return {
        url: null,
        error: `File size is ${sizeMB}MB (exceeds 10MB limit). Please compress your PDF or use Google Drive.`
      };
    }

    if (!file.name.toLowerCase().endsWith('.pdf') && file.type !== 'application/pdf') {
      return {
        url: null,
        error: 'Only PDF documents are supported (.pdf).'
      };
    }

    // Generate clean sanitized filename with random collision-resistant slug
    const sanitizedBase = file.name
      .replace(/\.[^/.]+$/, '')
      .replace(/[^a-zA-Z0-9-_]/g, '_')
      .substring(0, 30);
    const uniqueId = Math.random().toString(36).substring(2, 9);
    const filePath = `${Date.now()}_${sanitizedBase}_${uniqueId}.pdf`;

    const { error: uploadError } = await supabase.storage
      .from('pdf_documents')
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: false,
        contentType: 'application/pdf'
      });

    if (uploadError) {
      console.error('Supabase PDF upload error:', uploadError);
      return {
        url: null,
        error: uploadError.message || 'Failed to upload PDF to cloud storage.'
      };
    }

    // Get public URL
    const { data: publicUrlData } = supabase.storage
      .from('pdf_documents')
      .getPublicUrl(filePath);

    if (!publicUrlData?.publicUrl) {
      return {
        url: null,
        error: 'Failed to generate public URL for uploaded PDF.'
      };
    }

    return {
      url: publicUrlData.publicUrl,
      error: null,
      fileName: file.name,
      fileSize: file.size
    };
  } catch (err: any) {
    console.error('Unexpected PDF upload error:', err);
    return {
      url: null,
      error: err?.message || 'Unexpected error occurred while uploading PDF.'
    };
  }
}
