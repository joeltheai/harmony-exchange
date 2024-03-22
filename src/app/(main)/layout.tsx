import React from "react";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className=" bg-white">
      <div className="flex min-h-screen flex-col bg-[url('/hero/herobg.png')]">
        <Header />
        <main className="flex-grow p-4">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
