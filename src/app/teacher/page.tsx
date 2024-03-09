"use client";
import { FormEvent } from "react";
import React from "react";
import { useRouter } from "next/navigation"; // Updated import for Next.js 14

const TeacherApply = () => {
  const router = useRouter();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const json = {
      name: form.username.value,
      skill: form.skill.value,
      description: form.description.value,
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
              htmlFor="skill"
            >
              Skill
            </label>
            <input
              className="mb-3 block w-full appearance-none rounded border bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:bg-white focus:outline-none"
              id="skill"
              name="skill"
              type="text"
              placeholder="React"
            />
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
