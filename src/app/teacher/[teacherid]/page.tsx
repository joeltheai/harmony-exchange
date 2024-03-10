"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router"; // Import useRouter for redirection
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
// Use useRouter for client-side redirection

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
      // Example POST request to your booking API
      const bookingResponse = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          teacherId: teacher?.id,
        }),
      });

      if (!bookingResponse.ok) {
        throw new Error("Booking failed");
      }

      // Redirect to Stripe Checkout or another page after successful booking
      window.location.href = "https://buy.stripe.com/test_28o4gM6fK2nqb6MdQR";
      // Or use Next.js router for client-side redirection
      // router.push("https://buy.stripe.com/test_28o4gM6fK2nqb6MdQR");
    } catch (error) {
      console.error("Failed to book:", error);
    }
  };

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
          {/* Modified button with onClick event handler */}
          <button className="btn btn-primary mt-4" onClick={handleBookingAndRedirect}>
            Book
          </button>
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <div className="loading loading-dots loading-lg"></div>
        </div>
      )}
    </div>
  );
}