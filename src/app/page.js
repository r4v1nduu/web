"use client";

import Certificates from "@/components/Certificates";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";

export default function Home() {

  return (
    <div className="max-w-xl mx-auto px-4 py-6">
      
        <NavBar />
        <Hero />
        <Certificates />  
      
    </div>
  );
}
