import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { HiExternalLink } from "react-icons/hi";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch the project data from the JSON file
    fetch("/projects.json")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error loading projects:", error));
  }, []);

  return (
    <div className="my-6">
      <p className="text-center font-main text-md mb-2">PROJECTS</p>
      <div className="px-12">
        <Carousel>
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex justify-between">
                        <p className="text-lg font-bold">{project.name}</p>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <HiExternalLink className="w-6 h-6" />
                        </a>
                      </div>
                      <p className="text-sm text-neutral-600 mb-2">
                        {project.type}
                      </p>

                      <p className="text-sm">{project.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
