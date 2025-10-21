"use client";
import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import toast from "react-hot-toast";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const FileUpload = ({ onUploadSuccess, currentUrl = "" }) => {
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    // Validate file type
    const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!allowedTypes.includes(file.type)) {
      toast.error('Please upload a PDF or Word document');
      return;
    }

    // Validate file size (10MB limit)
    if (file.size > 10 * 1024 * 1024) {
      toast.error('File size must be less than 10MB');
      return;
    }

    setUploading(true);
    setUploadProgress(0);

    try {
      // Generate unique filename
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
      const filePath = `resumes/${fileName}`;

      // Upload file to Supabase Storage
      const { data, error } = await supabase.storage
        .from('resumes')
        .upload(filePath, file, {
          cacheControl: '3600',
          upsert: false
        });

      if (error) {
        if (error.message.includes('Bucket not found')) {
          throw new Error('Storage bucket not found. Please run the storage setup SQL in your Supabase dashboard.');
        }
        throw error;
      }

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from('resumes')
        .getPublicUrl(filePath);

      setUploadProgress(100);
      toast.success('File uploaded successfully!');
      onUploadSuccess(publicUrl);

    } catch (error) {
      console.error('Upload error:', error);
      toast.error('Error uploading file: ' + error.message);
    } finally {
      setUploading(false);
      setUploadProgress(0);
    }
  };

  const handleDeleteFile = async () => {
    if (!currentUrl) return;

    try {
      // Extract file path from URL
      const urlParts = currentUrl.split('/');
      const fileName = urlParts[urlParts.length - 1];
      const filePath = `resumes/${fileName}`;

      const { error } = await supabase.storage
        .from('resumes')
        .remove([filePath]);

      if (error) throw error;

      toast.success('File deleted successfully!');
      onUploadSuccess('');
    } catch (error) {
      console.error('Delete error:', error);
      toast.error('Error deleting file: ' + error.message);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <label className="block text-sm font-medium text-gray-700">
          Resume Upload
        </label>
        {currentUrl && (
          <button
            type="button"
            onClick={handleDeleteFile}
            className="text-red-600 hover:text-red-800 text-sm"
          >
            Remove File
          </button>
        )}
      </div>

      {currentUrl ? (
        <div className="flex items-center space-x-3 p-3 bg-green-50 border border-green-200 rounded-lg">
          <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-green-800">File uploaded successfully</p>
            <a
              href={currentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-green-600 hover:text-green-800 underline"
            >
              View file
            </a>
          </div>
        </div>
      ) : (
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
          <input
            type="file"
            onChange={handleFileUpload}
            accept=".pdf,.doc,.docx"
            disabled={uploading}
            className="hidden"
            id="resume-upload"
          />
          <label
            htmlFor="resume-upload"
            className={`cursor-pointer ${uploading ? 'cursor-not-allowed opacity-50' : ''}`}
          >
            <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
              <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="mt-4">
              <p className="text-sm text-gray-600">
                <span className="font-medium text-blue-600 hover:text-blue-500">
                  Click to upload
                </span>{" "}
                or drag and drop
              </p>
              <p className="text-xs text-gray-500">PDF, DOC, DOCX up to 10MB</p>
            </div>
          </label>
        </div>
      )}

      {uploading && (
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-gray-600">
            <span>Uploading...</span>
            <span>{uploadProgress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${uploadProgress}%` }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
