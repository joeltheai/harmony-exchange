"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

interface Teacher {
  id: string;
  name: string;
  skill: string;
  description: string;
  isApproved: boolean;
  email: string;
  twitter: string;
  instagram: string;
  addi: string;
  image1: string;
  image2: string;
  credentials: string;
}

export default function ExampleClientComponent() {
  const pathname = usePathname();
  const lastSegment = pathname.split("/").pop();
  const [teacher, setTeacher] = useState<Teacher | null>(null);

  useEffect(() => {
    const fetchTeacher = async () => {
      if (!lastSegment) return;
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

  const handleBookingAndRedirect = async () => {
    try {
      const bookingResponse = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          teacherId: teacher?.id,
          tName: teacher?.name,
          Skill: teacher?.skill,
        }),
      });

      if (!bookingResponse.ok) {
        throw new Error("Booking failed");
      }

      window.location.href = "https://buy.stripe.com/test_28o4gM6fK2nqb6MdQR";
    } catch (error) {
      console.error("Failed to book:", error);
    }
  };



  return (
    <MaxWidthWrapper>
      <div className="container mx-auto py-8">
        {teacher ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold">{teacher.name}</h2>
              <p className="mb-2 text-lg">
                <span className="font-semibold">Skill:</span> {teacher.skill}
              </p>
              <p className="mb-2 text-lg">
                <span className="font-semibold">Description:</span>{" "}
                {teacher.description}
              </p>
              <p className="mb-2 text-lg">
                <span className="font-semibold">Email:</span> {teacher.email}
              </p>
              <p className="mb-2 text-lg">
                <span className="font-semibold">Twitter:</span>{" "}
                {teacher.twitter !== "nil" ? (
                  <a
                    href={`https://twitter.com/${teacher.twitter}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    {teacher.twitter}
                  </a>
                ) : (
                  "N/A"
                )}
              </p>
              <p className="mb-2 text-lg">
                <span className="font-semibold">Instagram:</span>{" "}
                {teacher.instagram !== "nil" ? (
                  <a
                    href={`https://instagram.com/${teacher.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    {teacher.instagram}
                  </a>
                ) : (
                  "N/A"
                )}
              </p>
              <p className="mb-4 text-lg">
                <span className="font-semibold">Additional Information:</span>{" "}
                {teacher.addi}
              </p>
              <button
                className="rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600"
                onClick={handleBookingAndRedirect}
              >
                Book
              </button>
            </div>
            <div>
              <div className="mb-4">
                <h3 className="mb-2 text-xl font-semibold">Image 1</h3>
                <Image
                  src={teacher.image1}
                  alt="Teacher Image 1"
                  width={400}
                  height={300}
                  className="rounded"
                />
              </div>
              <div className="mb-4">
                <h3 className="mb-2 text-xl font-semibold">Image 2</h3>
                <Image
                  src={teacher.image2}
                  alt="Teacher Image 2"
                  width={400}
                  height={300}
                  className="rounded"
                />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold">Credentials</h3>
                <Image
                  src={teacher.credentials}
                  alt="Teacher Credentials"
                  width={400}
                  height={300}
                  className="rounded"
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="flex justify-center">
            <div className="loading loading-dots loading-lg"></div>
          </div>
        )}
      </div>
    </MaxWidthWrapper>
  );
}
