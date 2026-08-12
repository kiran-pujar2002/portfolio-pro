// src/components/ImageUpload.jsx
"use client";

import { useState } from "react";

export default function ImageUpload() {
  const [uploading, setUploading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  const handleUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET);

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );
      
      const data = await response.json();
      setImageUrl(data.secure_url);
      console.log("Uploaded image URL:", data.secure_url);
      alert("Image uploaded successfully! Check console for URL.");
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Upload failed. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-200/80">
      <h3 className="text-lg font-semibold mb-4">Upload Image to Cloudinary</h3>
      <div className="space-y-4">
        <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center">
          <input
            type="file"
            accept="image/*"
            onChange={handleUpload}
            className="w-full"
            disabled={uploading}
          />
          {uploading && <p className="text-blue-600 mt-2">Uploading...</p>}
        </div>
        {imageUrl && (
          <div>
            <p className="text-sm text-gray-600 mb-2">Uploaded Image:</p>
            <img src={imageUrl} alt="Uploaded" className="max-w-full h-auto rounded-lg" />
            <p className="text-xs text-gray-500 mt-2 break-all">{imageUrl}</p>
          </div>
        )}
      </div>
    </div>
  );
}