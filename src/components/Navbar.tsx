import { useEffect, useState } from "react";
import { useMediaQuery } from "../utils/useMediaQuery";
import { motion } from "framer-motion";
import UnderlineLink from "./UnderlineLInk";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

const URL = {
  HOME: "/",
  PROJECTS: "/projects",
  LEARNING: "/learning",
  EXPERIENCE: "/experience",
};

const NavBar = () => {
  const [toggled, setToggled] = useState(false);
  const [nav, setNav] = useState<number>(0);
  const matches = useMediaQuery("(min-width: 1280px)");

  const navigate = (id: number) => {
    if (id === nav) return;
    switch (id) {
      case 0:
        window.location.href = URL.HOME;
        break;
      case 1:
        window.location.href = URL.PROJECTS;
        break;
      case 2:
        window.location.href = URL.LEARNING;
        break;
      case 3:
        window.location.href = URL.EXPERIENCE;
        break;

      default:
        break;
    }

    setNav(id);
  };

  useEffect(() => {
    let path = window.location.pathname;
    switch (path) {
      case URL.HOME:
        setNav(0);
        break;

      case URL.PROJECTS:
        setNav(1);
        break;

      case URL.LEARNING:
        setNav(2);
        break;

      case URL.EXPERIENCE:
        setNav(3);
        break;

      default:
        break;
    }
  }, []);

  const topVariants = {
    open: { rotate: 45, y: 10 },
    closed: { rotate: 0, y: 0 },
  };

  const middleVariants = {
    open: { opacity: 0 },
    closed: { opacity: 1 },
  };

  const bottomVariants = {
    open: { rotate: -45, y: -10, width: "2rem" },
    closed: { rotate: 0, y: 0, width: "1rem" },
  };

  return (
    <div className="relative w-screen bg-stone-300">
      <div className="flex p-10 justify-between items-center">
        <div
          className="profile font-note text-4xl cursor-pointer"
          onClick={() => navigate(0)}
        >
          SP
        </div>

        {matches && (
          <div className="routes font-note text-2xl flex justify-between space-x-10">
            <div
              className="projects-route cursor-pointer"
              onClick={() => navigate(0)}
            >
              <UnderlineLink text="Home" rough={true} active={nav === 0} />
            </div>
            <div
              className="projects-route cursor-pointer"
              onClick={() => navigate(1)}
            >
              <UnderlineLink text="Projects" rough={true} active={nav === 1} />
            </div>
            <div
              className="learning-route cursor-pointer"
              onClick={() => navigate(2)}
            >
              <UnderlineLink text="Learning" rough={true} active={nav === 2} />
            </div>
            <div
              className="experience-route cursor-pointer"
              onClick={() => navigate(3)}
            >
              <UnderlineLink
                text="Experience"
                rough={true}
                active={nav === 3}
              />
            </div>
          </div>
        )}

        {matches && (
          <div className="contact-me relative font-note text-2xl cursor-pointer underline flex justify-center items-center">
            <div>Get In Touch</div>
          </div>
        )}

        {!matches && (
          <div
            className="settings flex z-10"
            onClick={() => {
              console.log(toggled);
              return setToggled((prevToggled) => !prevToggled);
            }}
          >
            <div className="flex flex-col space-y-2">
              <motion.span
                className="block h-0.5 w-8 bg-black"
                animate={toggled ? "open" : "closed"}
                variants={topVariants}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="block h-0.5 w-6 bg-black"
                animate={toggled ? "open" : "closed"}
                variants={middleVariants}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="block h-0.5 w-4 bg-black"
                animate={toggled ? "open" : "closed"}
                variants={bottomVariants}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        )}

        {!matches && toggled && (
          <div className="h-screen w-screen z-2 bg-stone-300 flex justify-center items-center absolute top-0 right-0">
            <div>Hello World</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
