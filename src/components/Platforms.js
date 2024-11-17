import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Image from "next/image";

export default function Platforms() {
  return (
    <div className="px-2 my-6">
      <p className="text-sm text-center mb-4">CYBERSECURIY PLATFORMS</p>

      <div className="grid grid-cols-2 gap-4 max-w-60 p-4 ring-1 ring-neutral-800 rounded-xl mx-auto">
        <div className="">
          <Image
            src="/Images/hackerone.png"
            alt="Hackerrank"
            width={12}
            height={12}
            className="mx-auto"
          />
          <p className="text-xs mt-1 text-center">HackerOne</p>
        </div>
        <div>
          <Image
            src="/Images/tryhackme.png"
            alt="TryHackMe"
            width={40}
            height={40}
            className="mx-auto"
          />
          <p className="text-xs mt-1 text-center">HackerOne</p>
        </div>
        <div>
          <Image
            src="/Images/hackthebox.png"
            alt="HackTheBox"
            width={22}
            height={22}
            className="mx-auto"
          />
          <p className="text-xs mt-1 text-center">HackTheBox</p>
        </div>
        <div>
          <Image
            src="/Images/hackerrank.png"
            alt="HackerRank"
            width={22}
            height={22}
            className="mx-auto"
          />
          <p className="text-xs mt-1 text-center">HackerOne</p>
        </div>
      </div>
    </div>
  );
}
