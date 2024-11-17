import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function NavBar() {
  return (
    <div>
      <div className="fixed top-0 left-0 right-0 z-10 max-w-xl mx-auto">
        <div className="h-20 pt-6 bg-neutral-950">
          <div className="ring-1 rounded-full ring-neutral-500 shadow-md shadow-neutral-600 h-10 flex justify-between px-3">
            <div className="my-auto font-extrabold indent-1 font-logo">
              r4v1ndu
            </div>
            <div className="flex gap-3 my-auto">
              <BsLinkedin className="w-5 h-5 hover:cursor-pointer hover:fill-indigo-400" />
              <BsGithub className="w-5 h-5 hover:cursor-pointer hover:fill-indigo-400" />
            </div>
          </div>
        </div>
        <div className="h-10 bg-gradient-to-b from-neutral-950 via-neutral-950/80 to-transparent"></div>
      </div>
    </div>
  );
}
