// src/lib/cloudinary.js

export const getCloudinaryUrl = (publicId, options = {}) => {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'ty0vjzcd';
  
  // Build transformations string
  const transformations = Object.entries(options)
    .filter(([_, value]) => value !== undefined && value !== null)
    .map(([key, value]) => `${key}_${value}`)
    .join(',');

  // Base URL without transformations
  let baseUrl = `https://res.cloudinary.com/${cloudName}/image/upload`;
  
  // Add transformations if they exist
  if (transformations) {
    baseUrl += `/${transformations}`;
  }
  
  // Add public ID (without file extension)
  return `${baseUrl}/${publicId}`;
};

export const getProfileImage = (publicId = 'kiran-image_nlmlue') => {
  // Use the URL with version and extension directly
  // This is more reliable than generating it
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'ty0vjzcd';
  
  // Option 1: Use the direct URL (recommended for your case)
  return `https://res.cloudinary.com/${cloudName}/image/upload/v1786187308/kiran-image_nlmlue.png`;
  
  // Option 2: If you want transformations, use this format
  // return `https://res.cloudinary.com/${cloudName}/image/upload/v1786187308/c_fill,g_face,h_400,r_max,w_400/kiran-image_nlmlue.png`;
};

export const getProjectImage = (publicId, width = 800, height = 400) => {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'ty0vjzcd';
  
  // For project images, use the direct URL format
  // Replace with your actual project image public IDs and versions
  return `https://res.cloudinary.com/${cloudName}/image/upload/v1234567890/${publicId}.png`;
};

// For fetching images with transformations
export const getOptimizedImageUrl = (publicId, version, options = {}) => {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'ty0vjzcd';
  
  const defaultOptions = {
    quality: 'auto',
    fetch_format: 'auto',
  };
  
  const mergedOptions = { ...defaultOptions, ...options };
  
  // Build transformations string (e.g., "c_fill,g_face,h_400,w_400")
  const transformations = Object.entries(mergedOptions)
    .map(([key, value]) => `${key}_${value}`)
    .join(',');
  
  return `https://res.cloudinary.com/${cloudName}/image/upload/${version}/${transformations}/${publicId}`;
};