"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Footer from "@/components/Footer";


const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
           <Hero />
           <Footer />
      </div>
    </main>
  );
};

export default Home;
