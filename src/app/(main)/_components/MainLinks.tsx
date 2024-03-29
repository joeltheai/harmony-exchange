"use client";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname hook

const MainLinks = () => {
  const { isLoaded, isSignedIn } = useAuth();
  const pathname = usePathname(); // Get the current pathname
  const currentPath = pathname.split("/").pop(); // Get the last segment of the pathname

  // Function to determine if the link should be underlined
  // Function to determine if the link should be underlined
  const isActive = (path: string | undefined) => {
    return pathname.includes(`/${path}`); // Check if the pathname includes the specified path
  };

  return (
    <div>
      <div className="flex flex-row pt-[3%] align-text-bottom">
        <nav>
          <ul className="flex gap-12 align-text-bottom">
            <li>
              <Link
                href="/lessons"
                className={`p-2 text-white ${isActive("lessons") ? "rounded-md bg-green-500 p-2 font-semibold text-green-900" : "transition hover:rounded-md hover:bg-sky-500/50 hover:p-2 "}`}
              >
                Lessons
              </Link>
            </li>
            <li>
              <Link
                href="/exercises"
                className={`p-2 text-white ${isActive("exercises") ? "rounded-md bg-green-500 p-2 font-semibold text-green-900" : "transition hover:rounded-md hover:bg-sky-500/50 hover:p-2 "}`}
              >
                Exercises
              </Link>
            </li>
            <li>
              <Link
                href="/quiz"
                className={`p-2 text-white ${isActive("quiz") ? "rounded-md bg-green-500 p-2 font-semibold text-green-900" : "transition hover:rounded-md hover:bg-sky-500/50 hover:p-2 "}`}
              >
                Quiz
              </Link>
            </li>

            <li>
              <Link
                href="/toolss"
                className={`p-2 text-white ${isActive("toolss") ? "rounded-md bg-green-500 p-2 font-semibold text-green-900" : "transition hover:rounded-md hover:bg-sky-500/50 hover:p-2 "}`}
              >
                Tools
              </Link>
            </li>
            <li>
              <Link
                href="/teacher-connect"
                className={`p-2 text-white ${isActive("teacher-connect") ? "rounded-md bg-green-500 p-2 font-semibold text-green-900" : "transition hover:rounded-md hover:bg-sky-500/50 hover:p-2 "}`}
              >
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
