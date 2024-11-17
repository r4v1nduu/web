"use client";
import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function WorkExperience() {
  const [workExperience, setWorkExperience] = useState(null);

  useEffect(() => {
    // Fetch data from the JSON file in the public folder
    fetch("/workExperience.json")
      .then((response) => response.json())
      .then((data) => setWorkExperience(data))
      .catch((error) =>
        console.error("Error loading work experience data:", error)
      );
  }, []);

  if (!workExperience) {
    return <p>Loading...</p>; // Add a loading state if data is still being fetched
  }

  return (
    <div>
      {/* Currently Working */}
      <div>
        <p className="text-sm mb-4 mt-12 text-neutral-400">CURRENTLY</p>

        <div className="flex justify-between">
          <div>
            <p className="font-bold">{workExperience.current.title}</p>
            <p className="text-sm text-neutral-400">
              {workExperience.current.year}
            </p>
          </div>
          <div>
            <p className="text-right font-semibold">
              {workExperience.current.company}
            </p>
            <p className="text-sm text-right text-neutral-400">
              {workExperience.current.location}
            </p>
          </div>
        </div>
      </div>

      {/* Previous Roles Accordion */}
      <Accordion type="single" collapsible>
        <AccordionItem value="previous-roles">
          <AccordionTrigger className="text-neutral-400 mt-1">
            Previous roles
          </AccordionTrigger>
          <AccordionContent>
            <div className="mb-2 ml-1 space-y-4 border-l border-neutral-700 pl-4">
              {workExperience.previous.map((role, index) => (
                <div key={index} className="flex justify-between">
                  <div>
                    <p className="text-sm">{role.title}</p>
                    <p className="text-xs text-neutral-400">{role.year}</p>
                  </div>
                  <div>
                    <p className="text-right text-sm">{role.company}</p>
                    <p className="text-xs text-right text-neutral-400">
                      {role.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
