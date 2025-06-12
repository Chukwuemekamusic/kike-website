// app/components/layout.tsx (Example)
import React from "react";
import Navbar from "./navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    // Now you can use the Tailwind classes directly
    <div className="min-h-screen bg-kikelomo-purple-light text-kikelomo-text-dark">
      <Navbar />
      <main className="container mx-auto p-4 sm:p-6 lg:p-8">{children}</main>
    </div>
  );
};

export default Layout;
