import { useState } from 'react';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Initialize the Supabase client
const supabase: SupabaseClient = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL as string,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
);

const ImageUploader: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  const handleImageUpload = async () => {
    if (selectedImage) {
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('teacher-images')
        .upload(`${Date.now()}_${selectedImage.name}`, selectedImage);

      if (uploadError) {
        console.error('Error uploading image:', uploadError);
      } else {
        const { data: urlData } = supabase.storage
          .from('teacher-images')
          .getPublicUrl(uploadData.path);

        setUploadedImageUrl(urlData.publicUrl);
      }
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button onClick={handleImageUpload}>Upload Image</button>
      {uploadedImageUrl && (
        <div>
          <p>Uploaded Image URL:</p>
          <a href={uploadedImageUrl} target="_blank" rel="noopener noreferrer">
            {uploadedImageUrl}
          </a>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
