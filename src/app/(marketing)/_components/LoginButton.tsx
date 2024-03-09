"use client";

import { UserButton, SignIn } from "@clerk/nextjs";
import { useAuth } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { useClerk } from "@clerk/clerk-react";
import { useRouter } from "next/navigation";

const SignOutButton = () => {
  const { signOut } = useClerk();
  const router = useRouter();

  return (
    // Clicking on this button will sign out a user and reroute them to the "/" (home) page.
    <button onClick={() => signOut(() => router.push("/"))}>Sign out</button>
  );
};

const LoginButton = () => {
  const {isLoaded, isSignedIn } = useAuth();

  if (!isSignedIn) {
    // Handle signed out state however you like
    return (
      <div>
        <Link href="/sign-in">
          <Button className=" bg-yellow-600">Log in</Button>
        </Link>
      </div>
    );
  }
  if (!isLoaded) {
    // Handle loading state however you like
    return <div>Loading...</div>;
  }
 

  return (
    <div className="flex flex-row gap-5">
      <UserButton />
      <div className="flex">
        <Button className=" hover:bg-yellow-600">
          <SignOutButton />
        </Button>
      </div>
    </div>
  );
};

export default LoginButton;
