"use client";
import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BiSolidCertification, BiCertification } from "react-icons/bi";

export default function Certificates() {
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    fetch("/certificates.json")
      .then((response) => response.json())
      .then((data) => setCertificates(data));
  }, []);

  return (
    <div>
      <Accordion type="single" collapsible className="border-t">
        <AccordionItem value="certificates">
          <AccordionTrigger className="flex justify-start gap-2 font-main text-md">
            <BiSolidCertification />
            CERTIFICATES
          </AccordionTrigger>
          <AccordionContent>
            <ul>
              {certificates.map((cert) => (
                <li key={cert.id} className="mb-2">
                  <a href={cert.link} className="hover:cursor-pointer">
                    {cert.name}
                  </a>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}