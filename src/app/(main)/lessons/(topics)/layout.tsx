import React from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import SidebarNav from "./_components/sidenav";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const cardTitles = [
    "Notes",
    "Staff",
    "Clefs",
    "Accidentals",
    "Intervals",
    "Chords",
    "Scales",
    "Keys",
  ];

  return (
    <MaxWidthWrapper>
      <div className="flex  flex-col md:flex-row md:overflow-hidden">
        <div className="  flex-none md:w-64">
          <SidebarNav />
        </div>
        <main className="flex-grow p-4">{children}</main>
      </div>
    </MaxWidthWrapper>
  );
};

export default Layout;
