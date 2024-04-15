"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

interface Bookings {
  id: string;
  teacherId: string;
  studentId: string;
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
      <div>
        <div>
          hello
          <div>{lastSegment}</div>
          <div>
            {filteredTeachers.map((teacher) => (
              <div key={teacher.id}>
                <div>
                  <div>{teacher.id}</div>
                  <div>{teacher.teacherId}</div>
                </div>
                <div>
                  <div>
                    <div>
                      <div>{teacher.studentId}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Teacherlist;
