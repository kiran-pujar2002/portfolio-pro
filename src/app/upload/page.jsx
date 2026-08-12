// src/app/upload/page.jsx
"use client";
import { useState } from "react";

export default function UploadPage() {
  const [uploading, setUploading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "portfolio_uploads"); // Your preset name

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
      
      // Extract public ID from URL
      const publicId = data.public_id;
      console.log("📸 Uploaded successfully!");
      console.log("Public ID:", publicId);
      console.log("URL:", data.secure_url);
      
      alert(`✅ Image uploaded!\nPublic ID: ${publicId}\nCopy this for your code.`);
    } catch (error) {
      console.error("Upload failed:", error);
      alert("❌ Upload failed. Check console for details.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Upload Images to Cloudinary</h1>
      
      <div className="bg-white p-8 rounded-2xl shadow-sm border">
        <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center">
          <input
            type="file"
            accept="image/*"
            onChange={handleUpload}
            disabled={uploading}
            className="w-full"
          />
          {uploading && <p className="text-blue-600 mt-4">Uploading...</p>}
        </div>
        
        {imageUrl && (
          <div className="mt-6">
            <p className="font-semibold">Uploaded Image:</p>
            <img src={imageUrl} alt="Uploaded" className="mt-2 max-h-64 rounded-lg" />
            <p className="text-xs text-gray-500 mt-2 break-all">{imageUrl}</p>
          </div>
        )}
      </div>
      
      <div className="mt-8 bg-blue-50 p-6 rounded-xl">
        <h3 className="font-semibold text-blue-800 mb-2">📝 Instructions:</h3>
        <ol className="text-sm text-blue-700 space-y-1 list-decimal pl-4">
          <li>Upload your profile photo (use public ID: <code className="bg-blue-100 px-2 py-0.5 rounded">profile</code>)</li>
          <li>Upload your project images (use public IDs: <code className="bg-blue-100 px-2 py-0.5 rounded">project-dev-tinder</code>, <code className="bg-blue-100 px-2 py-0.5 rounded">project-financial</code>)</li>
          <li>Copy the public ID from the console or alert</li>
          <li>Update your component code with the correct public IDs</li>
        </ol>
      </div>
    </div>
  );
}