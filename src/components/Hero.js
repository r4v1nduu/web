import Image from "next/image";
import { IoMdHand } from "react-icons/io";

export default function Hero() {
  return (
    <div>
      <div className="flex justify-center mt-24">
        <div className="relative inline-block">
          <Image
            src="./Images/Me.jpg"
            alt="Me"
            width={140}
            height={140}
            className="rounded-full"
          />
          <div className="absolute flex bottom-8 left-28 -rotate-3 shadow-md bg-neutral-50 text-black rounded-sm py-1 px-2 text-sm font-hand font-bold">
            Hello(
            <IoMdHand className="mt-1" />
            );
          </div>
        </div>
      </div>

      <p className="text-center mt-6 px-8">
        <span className="text-neutral-400 font-semibold font-hand">I'm </span>
        <span className="font-bold font-logo">Ravindu Dissanayake </span>
        <br />
        <span className="text-neutral-400 font-semibold font-hand">
          a Cyber Security Unvergraduate from Sri Lanka
        </span>
      </p>
    </div>
  );
}
