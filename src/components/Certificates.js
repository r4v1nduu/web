"use client";

import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
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

        <Accordion type="single" collapsible>
        <AccordionItem value="certs">
            <AccordionTrigger className="flex justify-start font-main text-md">
            <BiSolidCertification className="mr-2"/>
              CERTIFICATES
            </AccordionTrigger>
            <AccordionContent>
            <ul>
                {certificates.map((cert) => (
                <li key={cert.id} className="mb-2">
                    <a href={cert.link} className="hover:cursor-pointer">{cert.name}</a>
                </li>
                ))}
            </ul>
            </AccordionContent>
        </AccordionItem>
        </Accordion>

      </div>
    );
  }
  