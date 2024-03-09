"use client";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";

const MainLinks = () => {
  const { isLoaded, isSignedIn } = useAuth();

  return (
    <div>
      <div className="flex flex-row pt-[3%] align-text-bottom">
        <nav>
          <ul className="flex gap-12 align-text-bottom">
            <li>
              <Link href="/exercises" className="text-white hover:underline">
                Exercises
              </Link>
            </li>
            <li>
              <Link href="/lessons" className="text-white hover:underline">
                Lessons
              </Link>
            </li>
            <li>
              <Link href="/quiz" className="text-white hover:underline">
                Quiz
              </Link>
            </li>
            {/* Conditionally render the Teacher-Connect link */}
            <li>
              <Link href="/teacher/book" className="text-white hover:underline">
                Teacher-Connect
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MainLinks;
