"use client";
import { FormEvent, useState } from "react";
import React from "react";
import { useRouter } from "next/navigation";
import { createClient, SupabaseClient } from "@supabase/supabase-js";

// Initialize the Supabase client
const supabase: SupabaseClient = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL as string,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
);

const TeacherApply = () => {
  const router = useRouter();
  const [selectedImage1, setSelectedImage1] = useState<File | null>(null);
  const [selectedImage2, setSelectedImage2] = useState<File | null>(null);
  const [selectedCredentials, setSelectedCredentials] = useState<File | null>(null);
  const [selectedSkill, setSelectedSkill] = useState<string>("Guitar");

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>, imageType: string) => {
    const file = event.target.files?.[0];
    if (file) {
      if (imageType === 'image1') {
        setSelectedImage1(file);
      } else if (imageType === 'image2') {
        setSelectedImage2(file);
      } else if (imageType === 'credentials') {
        setSelectedCredentials(file);
      }
    }
  };

  const handleSkillChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSkill(event.target.value);
  };

  const uploadImage = async (selectedImage: File | null): Promise<string | null> => {
    if (selectedImage) {
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from("teacher-images")
        .upload(`${Date.now()}_${selectedImage.name}`, selectedImage);

      if (uploadError) {
        console.error("Error uploading image:", uploadError);
        return null;
      } else {
        const { data: urlData } = supabase.storage
          .from("teacher-images")
          .getPublicUrl(uploadData.path);

        return urlData.publicUrl;
      }
    }
    return null;
  };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    // Upload all images and wait for the promises to resolve
    const [image1Url, image2Url, credentialsUrl] = await Promise.all([
      uploadImage(selectedImage1),
      uploadImage(selectedImage2),
      uploadImage(selectedCredentials),
    ]);

    // Check if all image uploads were successful
    if (image1Url && image2Url && credentialsUrl) {
      const json = {
        name: form.username.value,
        email: form.email.value,
        skill: selectedSkill,
        description: form.description.value,
        twitter: form.twitter.value || "nil",
        instagram: form.instagram.value || "nil",
        addi: form.addi.value,
        image1: image1Url,
        image2: image2Url,
        credentials: credentialsUrl,
      };

      const response = await fetch("/api/teacher", {
        method: "POST",
        body: JSON.stringify(json),
      });

      console.log(response);

      if (response.ok) {
        console.log("Submission successful");
        router.push("/teacher/applySuccess");
      } else {
        console.log("Submission failed");
        console.log(response);
      }
    } else {
      console.error("One or more image uploads failed");
    }
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <form onSubmit={handleSubmit} className="w-full max-w-lg">
        <div className="-mx-3 mb-6 flex flex-wrap">
          <div className="w-full px-3">
            <label
              className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
              htmlFor="username"
            >
              Name
            </label>
            <input
              className="mb-3 block w-full appearance-none rounded border bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:bg-white focus:outline-none"
              id="username"
              name="username"
              type="text"
              placeholder="Jane Doe"
            />
          </div>
          <div className="w-full px-3">
            <label
              className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="mb-3 block w-full appearance-none rounded border bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:bg-white focus:outline-none"
              id="email"
              name="email"
              type="email"
              placeholder="jane@example.com"
            />
          </div>
          <div className="w-full px-3">
            <label
              className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
              htmlFor="skill"
            >
              Skill
            </label>
            <select
              className="mb-3 block w-full appearance-none rounded border bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:bg-white focus:outline-none"
              id="skill"
              name="skill"
              value={selectedSkill}
              onChange={handleSkillChange}
            >
              <option value="Guitar">Guitar</option>
              <option value="Violin">Violin</option>
              <option value="Piano">Piano</option>
            </select>
          </div>
          <div className="w-full px-3">
            <label
              className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              className="mb-3 block w-full appearance-none rounded border bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:bg-white focus:outline-none"
              id="description"
              name="description"
              placeholder="Brief description"
            ></textarea>
          </div>
          <div className="w-full px-3">
            <label
              className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
              htmlFor="twitter"
            >
              Twitter Username
            </label>
            <input
              className="mb-3 block w-full appearance-none rounded border bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:bg-white focus:outline-none"
              id="twitter"
              name="twitter"
              type="text"
              placeholder="@username"
            />
          </div>
          <div className="w-full px-3">
            <label
              className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
              htmlFor="instagram"
            >
              Instagram Username
            </label>
            <input
              className="mb-3 block w-full appearance-none rounded border bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:bg-white focus:outline-none"
              id="instagram"
              name="instagram"
              type="text"
              placeholder="@username"
            />
          </div>
          <div className="w-full px-3">
            <label
              className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
              htmlFor="addi"
            >
              Additional Information
            </label>
            <textarea
              className="mb-3 block w-full appearance-none rounded border bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:bg-white focus:outline-none"
              id="addi"
              name="addi"
              placeholder="Additional information"
            ></textarea>
          </div>
          <div className="w-full px-3">
            <label
              className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
              htmlFor="image1"
            >
              Image 1
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(event) => handleImageChange(event, 'image1')}
              className="mb-3 block w-full appearance-none rounded border bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:bg-white focus:outline-none"
            />
          </div>
          <div className="w-full px-3">
            <label
              className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
              htmlFor="image2"
            >
              Image 2
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(event) => handleImageChange(event, 'image2')}
              className="mb-3 block w-full appearance-none rounded border bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:bg-white focus:outline-none"
            />
          </div>
          <div className="w-full px-3">
            <label
              className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
              htmlFor="credentials"
            >
              Credentials
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(event) => handleImageChange(event, 'credentials')}
              className="mb-3 block w-full appearance-none rounded border bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:bg-white focus:outline-none"
            />
          </div>
          <div className="w-full px-3">
            <button
              className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TeacherApply;
