"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";

interface Bookings {
  id: string;
  teacherId: string;
  studentId: string;
  tName: string;
  Skill: string;
}

const Teacherlist = () => {
  const pathname = usePathname();
  const lastSegment = pathname.split("/").pop();

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [teachers, setTeachers] = useState<Bookings[]>([]);

  useEffect(() => {
    const fetchTeachers = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("/api/booking", {
          method: "GET",
        });
        const data: Bookings[] = await response.json();
        setTeachers(data);
      } catch (error) {
        console.error("Failed to fetch teachers:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTeachers();
  }, []);

  const filteredTeachers = teachers;

  return (
    <MaxWidthWrapper>
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6">Booked Teachers</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {filteredTeachers
            .filter((teacher) => teacher.studentId === lastSegment)
            .map((teacher) => (
              <Link key={teacher.id} href={`/teacher/booked/${teacher.teacherId}`}>
                <div className="card bg-base-100 shadow-xl cursor-pointer transition duration-300 ease-in-out hover:shadow-2xl">
                  <div className="card-body">
                    <h2 className="card-title">{teacher.tName}</h2>
                    <p className="text-gray-500">{teacher.Skill}</p>
                  </div>
                </div>
              </Link>
            ))}
        </div>
        {filteredTeachers.filter((teacher) => teacher.studentId === lastSegment)
          .length === 0 && (
          <div className="text-center text-gray-500 mt-8">
            No booked teachers found.
          </div>
        )}
      </div>
    </MaxWidthWrapper>
  );
};

export default Teacherlist;
