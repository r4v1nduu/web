"use client";

import Certificates from "@/components/Certificates";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Platforms from "@/components/Platforms";
import Projects from "@/components/Projects";
import WorkExperience from "@/components/WorkExp";

export default function Home() {
  return (
    <div className="max-w-xl mx-auto px-4 py-6">
      <NavBar />
      <Hero />
      <WorkExperience />
      <Projects />
      <Certificates />
      <Platforms />
      <Footer />
    </div>
  );
}
