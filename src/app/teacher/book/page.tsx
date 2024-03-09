"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

// Define the Teacher interface
interface Teacher {
  id: string;
  name: string;
  skill: string;
  description: string;
  isApproved: boolean;
  // Add any other properties that are relevant
}

const Page = () => {
  // Initialize state with the type of Teacher[]
  const [teachers, setTeachers] = useState<Teacher[]>([]);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await fetch("/api/teacher", {
          method: "GET",
        });
        const data: Teacher[] = await response.json(); // Assume the response is an array of Teacher objects
        setTeachers(data);
        console.log(data);
      } catch (error) {
        console.error("Failed to fetch teachers:", error);
      }
    };

    fetchTeachers();
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {teachers
        .filter((teacher) => teacher.isApproved)
        .map((teacher, index) => (
          <div key={index} className="card w-96 bg-base-100 shadow-xl">
            <div className="px-10 pt-10"></div>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{teacher.name}</h2>
              <p>{teacher.skill}</p>
              <p>{teacher.description}</p>
              {/* Placeholder for rating */}
              <div className="rating rating-sm">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                {/* Repeat or dynamically generate based on rating */}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Page;
