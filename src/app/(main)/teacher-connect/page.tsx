"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

// Define the Teacher interface
interface Teacher {
  id: string;
  name: string;
  skill: string;
  description: string;
  isApproved: boolean;
}

const Page = () => {
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [selectedSkill, setSelectedSkill] = useState<string>("all");
  const [isLoading, setIsLoading] = useState<boolean>(true); // State to track loading status

  useEffect(() => {
    const fetchTeachers = async () => {
      setIsLoading(true); // Set loading to true before fetching data
      try {
        const response = await fetch("/api/teacher", {
          method: "GET",
        });
        const data: Teacher[] = await response.json();
        setTeachers(data);
      } catch (error) {
        console.error("Failed to fetch teachers:", error);
      } finally {
        setIsLoading(false); // Set loading to false after fetching data
      }
    };

    fetchTeachers();
  }, []);

  const handleSkillChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSkill(event.target.value);
  };

  // Filter teachers based on the selected skill
  const filteredTeachers = teachers.filter((teacher) =>
    selectedSkill === "all" ? true : teacher.skill === selectedSkill,
  );

  return (
    <div className="flex  justify-center">
      {isLoading ? (
        // DaisyUI Spinner centered
        <div className=" flex justify-center">
          <div className=" loading loading-spinner loading-lg "></div>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-4">
          <div className="  mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-800 md:text-5xl lg:text-6xl ">
            {" "}
            Welcome to the Teacher-connect section
          </div>
          <div className="mb-6 text-lg font-normal text-gray-500 dark:text-gray-400 sm:px-16 lg:text-xl xl:px-48">
            Here you can find teachers for your desired skill
          </div>
          {/* DaisyUI Select Dropdown for skill filtering */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">
                Select Skill you want to learn here :
              </span>
            </label>
            <div className="flex flex-row items-center gap-2">
              <select
                className="select select-bordered w-full px-4 py-2"
                value={selectedSkill}
                onChange={handleSkillChange}
              >
                <option value="all">All</option>
                <option value="Guitar">Guitar</option>
                <option value="Violin">Violin</option>
                <option value="Piano">Piano</option>
              </select>
              <Link href="/teacher" className="">
                <button className=" btn btn-outline btn-accent ">
                  or apply to become a teacher
                </button>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {filteredTeachers.length > 0 ? (
              filteredTeachers
                .filter((teacher) => teacher.isApproved)
                .map((teacher, index) => (
                  <div
                    key={index}
                    className="bg-base-700 card w-96 pb-5 pt-5 shadow-xl"
                  >
                    {/* Card content */}
                    <div className="card-body items-center  text-center ">
                      <Link href={`/teacher/${teacher.id}`}>
                        <p className="card-title  hover:underline">
                          {teacher.name}
                        </p>
                      </Link>
                      <p>{teacher.skill}</p>
                      <p>{teacher.description}</p>
                      {/* Placeholder for rating */}
                      {/* ... */}
                    </div>
                  </div>
                ))
            ) : (
              <div className="text-center">No teachers found</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
