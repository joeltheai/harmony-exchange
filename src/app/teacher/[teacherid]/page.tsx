"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

// Define the Teacher interface for TypeScript (optional)
interface Teacher {
  id: string;
  name: string;
  skill: string;
  description: string;
  isApproved: boolean;
}

export default function ExampleClientComponent() {
  const pathname = usePathname();
  const lastSegment = pathname.split("/").pop();
  const [teacher, setTeacher] = useState<Teacher | null>(null);

  useEffect(() => {
    const fetchTeacher = async () => {
      if (!lastSegment) return; // Guard clause if lastSegment is not available
      try {
        const response = await fetch(`/api/teacher/${lastSegment}`, {
          method: "GET",
        });
        if (!response.ok) {
          throw new Error("Failed to fetch teacher");
        }
        const data: Teacher = await response.json();
        setTeacher(data);
      } catch (error) {
        console.error("Failed to fetch teacher:", error);
      }
    };

    fetchTeacher();
  }, [lastSegment]);

  return (
    <div className="flex h-screen items-center justify-center">
      {teacher ? (
        <div className="text-center">
          <h2 className="text-2xl font-bold">{teacher.name}</h2>
          <p className="text-md">Skill: {teacher.skill}</p>
          <p className="text-md">Description: {teacher.description}</p>
          <p className="text-md">
            Approved: {teacher.isApproved ? "Yes" : "No"}
          </p>
          {/* DaisyUI Button */}
          <button className="btn btn-primary mt-4">Book</button>
        </div>
      ) : (
        // DaisyUI centered loading spinner
        <div className="flex items-center justify-center">
          <div className="loading loading-dots loading-lg"></div>
        </div>
      )}
    </div>
  );
}
