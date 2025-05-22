import { GiSkills } from "react-icons/gi";
import { GrProjects } from "react-icons/gr";
import { RiLinksLine } from "react-icons/ri";
import { ModeToggle } from "./mode-toggle";
import { PiReadCvLogoFill } from "react-icons/pi";
import { FaHome } from "react-icons/fa";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

function SideNavigationList() {
  const sections = [
    { sectionName: "Home", icon: <FaHome /> },
    { sectionName: "About", icon: <PiReadCvLogoFill /> },
    { sectionName: "Skills", icon: <GiSkills /> },
    { sectionName: "Projects", icon: <GrProjects /> },
    { sectionName: "Links", icon: <RiLinksLine /> },
  ];

  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    // Wait for the DOM to be fully loaded
    const timer = setTimeout(() => {
      sections.forEach((section) => {
        const element = document.getElementById(section.sectionName);
        if (element) observer.observe(element);
      });
    }, 0);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []); // Empty dependency array to run only once

  return (
    <motion.nav
      className="fixed top-52 right-3 z-50 bg-red-400 w-fit rounded-4xl "
      initial={{ opacity: 0, x: 100 }}
      animate={{
        opacity: 1,
        x: 0,
        transition: { delay: 1.5, type: "tween" },
      }}
    >
      <ul className="flex items-center justify-around flex-col">
        {sections.map((section, id) => (
          <li
            key={id}
            className={`m-2 mb-2 text-3xl p-3 cursor-pointer rounded-4xl hover:bg-black transition-all ease-in ${
              activeSection === section.sectionName
                ? "bg-black"
                : "bg-transparent"
            }`}
          >
            <a href={`#${section.sectionName}`}>{section.icon}</a>
          </li>
        ))}
        <li className="m-2 mb-4 text-3xl P-2 rounded-4xl cursor-pointer">
          <ModeToggle />
        </li>
      </ul>
    </motion.nav>
  );
}

export default SideNavigationList;
