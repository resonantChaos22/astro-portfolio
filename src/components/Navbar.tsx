import { useState } from "react";
import { useMediaQuery } from "../utils/useMediaQuery";

const NavBar = () => {
  const [toggled, setToggled] = useState(false);
  const matches = useMediaQuery("(min-width: 1280px)");
  return (
    <div className="relative w-screen">
      <div className="flex p-10 justify-between items-center">
        <div className="profile font-note text-4xl">My Corner</div>

        {matches && (
          <div className="routes font-note text-2xl flex justify-between space-x-10">
            <div className="home-route cursor-pointer">Home</div>
            <div className="projects-route cursor-pointer">Projects</div>
            <div className="learning-route cursor-pointer">Learnings</div>
          </div>
        )}

        {matches && (
          <div className="contact-me relative font-note text-2xl cursor-pointer underline flex justify-center items-center">
            <div>Get In Touch</div>
          </div>
        )}

        {!matches && (
          <div
            className="settings flex z-100"
            onClick={() => {
              console.log(toggled);
              return setToggled((prevToggled) => !prevToggled);
            }}
          >
            <div className="flex flex-col space-y-2">
              <span className="block h-0.5 w-8 bg-black" />
              <span className="block h-0.5 w-6 bg-black" />
              <span className="block h-0.5 w-4 bg-black" />
            </div>
          </div>
        )}

        {!matches && toggled && (
          <div className="h-screen w-screen z-2 bg-slate-300 flex justify-center items-center">
            <div>Hello World</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
