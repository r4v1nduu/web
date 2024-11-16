import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function NavBar() {
  
    return (
      <div>

        <div className="ring-1 rounded-full ring-neutral-500 shadow-md shadow-neutral-600 h-10 flex justify-between px-3">
            <div className="my-auto font-extrabold indent-1 font-logo">
                r4v1ndu
            </div>
            <div className="flex gap-3 my-auto">
                <BsLinkedin className="w-5 h-5 hover:cursor-pointer hover:fill-indigo-400"/>
                <BsGithub className="w-5 h-5 hover:cursor-pointer hover:fill-indigo-400"/>
            </div>
            
        </div>

      </div>
    );
  }
  