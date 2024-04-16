// TeacherConnectClient.tsx
"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Define the Teacher interface
interface Teacher {
  id: string;
  name: string;
  skill: string;
  description: string;
  isApproved: boolean;
  image1: string;
}

interface TeacherConnectClientProps {
  userId: string | null;
}

const TeacherConnectClient: React.FC<TeacherConnectClientProps> = ({
  userId,
}) => {
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [selectedSkill, setSelectedSkill] = useState<string>("all");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTeachers = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("/api/teacher", {
          method: "GET",
        });
        const data: Teacher[] = await response.json();
        setTeachers(data);
      } catch (error) {
        console.error("Failed to fetch teachers:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTeachers();
  }, []);

  const handleSkillChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSkill(event.target.value);
  };

  const filteredTeachers = teachers.filter((teacher) =>
    selectedSkill === "all" ? true : teacher.skill === selectedSkill,
  );
  return (
    <div className="flex justify-center">
      {isLoading ? (
        // DaisyUI Spinner centered
        <div className="flex justify-center">
          <div className="loading loading-spinner loading-lg"></div>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-4">
          <div className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-800 md:text-5xl lg:text-6xl">
            Welcome to the Teacher-connect section
          </div>
          <div className="mb-6 text-lg font-normal text-gray-500 dark:text-gray-400 sm:px-16 lg:text-xl xl:px-48">
            Here you can find teachers for your desired skill
          </div>

          <Link href={`/teacher-connect/${userId}`} className="">
            <button className="btn btn-outline btn-accent">
              Booked teachers
            </button>
          </Link>

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
                <button className="btn btn-outline btn-accent">
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
                  <Link href={`/teacher/${teacher.id}`} key={teacher.id}>
                    <div className="card w-96 bg-lime-300 transition duration-300 ease-in-out hover:bg-green-300 hover:shadow-xl">
                      {/* Card content */}
                      <figure className=" relative mt-5 mx-5 h-[200px] w-[200px]">
                        <Image
                          src={teacher.image1}
                          alt={teacher.name}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-xl"
                        />
                      </figure>
                      <div className="card-body  ">
                        <div className="flex justify-between">
                          <h2 className="card-title ">{teacher.name} </h2>
                          <div className="badge badge-outline justify-center align-middle ">
                            {teacher.skill}
                          </div>
                        </div>
                        <div className="card-actions flex justify-center text-center ">
                          <p>{teacher.description}</p>
                        </div>
                        {/* ... */}
                      </div>
                    </div>
                  </Link>
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

export default TeacherConnectClient;
