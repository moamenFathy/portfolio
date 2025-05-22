import { ThemeProvider } from "@/components/theme-provider";
import SideNavigationList from "./components/SideNavigationList";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { FaBrain } from "react-icons/fa6";
import { HiLightBulb } from "react-icons/hi";
import { IoPeopleCircleOutline } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import me from "./assets/me.png";
import me2 from "./assets/me2.jpeg";
import project from "./assets/project.jpeg";

function App() {
  const icons = [
    { text: "Creative", icon: <FaBrain /> },
    { text: "innovative", icon: <HiLightBulb /> },
    { text: "Ideal", icon: <IoPeopleCircleOutline /> },
  ];

  const fileUrl = "../public/Moamen Fathy.pdf";
  const fileName = "Moamen's CV";

  const links = [
    {
      id: 0,
      anchor: "https://github.com/moamenFathy?tab=repositories",
      icon: <FaGithub />,
    },
    {
      id: 1,
      anchor: "https://www.facebook.com/moamen.mahmoud.9083477",
      icon: <FaFacebook />,
    },
    {
      id: 2,
      anchor:
        "https://www.instagram.com/moamen_mahmoud_fthy/?next=%2Ffxcal%2Fdisclosure%2F%3Fnext%3D%252F",
      icon: <FaInstagram />,
    },
    {
      id: 3,
      anchor: "https://www.linkedin.com/in/moamen-mahmoud-2409aa326/",
      icon: <FaLinkedin />,
    },
  ];

  const skills = [
    { id: 0, description: "React", icon: <FaReact color="blue" /> },
    { id: 1, description: "Git", icon: <FaGitAlt color="#E84D31" /> },
    {
      id: 2,
      description: "Tailwind",
      icon: <RiTailwindCssFill color="#00BCFF" />,
    },
    { id: 3, description: "Bootstrap", icon: <FaBootstrap color="#6F10F4" /> },
    { id: 4, description: "HTML", icon: <FaHtml5 color="#DD4B25" /> },
    { id: 5, description: "CSS", icon: <FaCss3Alt color="#254BDF" /> },
    {
      id: 6,
      description: "JavaScript",
      icon: <SiJavascript color="#F7E025" />,
    },
  ];

  const bounceVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      y: [0, -20, 0, -15, 0, -10, 0], // Drop distance
      transition: { delay: 2, repeat: Infinity, duration: 5, ease: "easeOut" },
    },
  };

  const liVariants = {
    visible: {
      y: [0, -20, -40, -60, -80, 0],
      transition: {
        delay: 2,
        duration: 9,
        repeat: Infinity,
        repeatDelay: 0.8,
      },
    },
  };

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {/* navigation */}
      <div className="fixed flex justify-center z-50 w-full mt-6">
        <SideNavigationList />
      </div>
      {/* navigation */}
      {/* welcome menu */}
      <motion.div className="home overflow-y-hidden" id="Home">
        <motion.div
          className="flex flex-col gap-3"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.5 },
          }}
        >
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <img style={{ borderRadius: "100%" }} src={me} alt="" width={300} />
          </motion.div>
          <div className="text-center">
            <motion.h1
              initial={{ y: 1000 }}
              animate={{ y: 0, transition: { delay: 2 } }}
              className="text-7xl w-fit flex overflow-hidden h-fit items-center name"
            >
              Moamen Mahmoud
            </motion.h1>
            <motion.div
              className="text-2xl mt-4 flex gap-0 justify-center"
              initial={{ y: 1000 }}
              animate={{
                y: 0,
                transition: {
                  delay: 2,
                  type: "tween",
                  duration: 1.2,
                  stiffness: 20,
                },
              }}
            >
              A
              <motion.span
                className="ml-1 h-8 w-[150px] text-2xl overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 3, duration: 5 } }}
              >
                <ul className="">
                  {icons.map(({ text, icon }) => (
                    <motion.li
                      variants={liVariants}
                      initial="hidden"
                      animate="visible"
                      className="flex justify-center items-center"
                    >
                      <span className="tracking-wider liGradient">{text}</span>
                      <span className="ml-1">{icon}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.span>
              FrontEnd Developer
            </motion.div>
          </div>
        </motion.div>
        <motion.span
          className="absolute bottom-0 left-3 flex items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 2 } }}
        >
          <motion.p
            className="text-3xl"
            variants={bounceVariant}
            animate="visible"
          >
            Scroll Down ↓
          </motion.p>
        </motion.span>
      </motion.div>
      {/* welcome menu */}
      {/* About */}
      <div
        className="min-h-screen h-auto flex justify-center flex-wrap lg:flex-nowrap items-start gap-10 p-20 pt-36"
        id="About"
      >
        {/* img */}
        <motion.div
          className="border-1 rounded-4xl border-dashed border-red-400 p-2"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: { delay: 0.5, duration: 2 },
          }}
          viewport={{ once: true }}
        >
          <img src={me2} alt="" width={700} className="rounded-4xl" />
        </motion.div>
        {/* img */}
        {/* text */}
        <div className="flex flex-col">
          <motion.div
            className=""
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 1.5, duration: 2 },
            }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl head text-red-400">Discover</h3>
            <h1 className="text-3xl">About Me</h1>
            <hr className="border-2 w-20 border-red-400" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Similique reiciendis fuga quae, obcaecati sint voluptas molestiae
              laborum temporibus ducimus beatae, atque ex magnam praesentium
              quas nam optio. Rerum, blanditiis est! lorem
            </p>
          </motion.div>
          <motion.div
            className="flex flex-wrap mt-10 border-1 rounded-3xl justify-around border-blue-500 gap-6 p-6"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { delay: 1.4, duration: 2 },
            }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col">
              <p className="font-bold text-xl">
                Name:
                <span className="font-normal text-base"> Moamen Mahmoud</span>
              </p>
              <br />
              <p className="font-bold text-xl">
                Phone:
                <span className="font-normal text-base"> +20 120 239 0921</span>
              </p>
              <br />
              <p className="font-bold text-xl">
                Gmail:
                <span className="font-normal text-base">
                  {" "}
                  moamenmahmoud118@gmail.com
                </span>
              </p>
            </div>

            <div className="flex flex-col">
              <p className="font-bold text-xl">
                Age:
                <span className="font-normal text-base"> 19</span>
              </p>
              <br />
              <p className="font-bold text-xl">
                Education:
                <span className="font-normal text-base">
                  {" "}
                  Cs Student In Suez Canal UNI
                </span>
              </p>
              <br />
              <p className="font-bold text-xl">
                Address:
                <span className="font-normal text-base"> PortSaid, Egypt</span>
              </p>
            </div>
          </motion.div>
          <motion.div
            className="mt-7"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { delay: 1.4, duration: 2 },
            }}
            viewport={{ once: true }}
          >
            <Button>
              <a href={fileUrl} download={fileName}>
                Download CV
              </a>
            </Button>
          </motion.div>
        </div>
        {/* text */}
      </div>
      {/* About */}
      {/* Skills */}
      <div
        className="min-h-screen flex justify-center items-center"
        id="Skills"
      >
        <div className="">
          <motion.h1
            className="text-center mb-16 text-4xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 3 } }}
            viewport={{ once: true }}
          >
            My Skills
          </motion.h1>
          <ul className="flex flex-row gap-10 flex-wrap justify-center">
            {skills.map(({ description, icon, id }) => (
              <motion.li
                key={id}
                className="text-3xl bg-[#15151b] flex flex-col justify-around items-center p-10 w-[150px] rounded-full h-[300px]"
                initial={{ x: 100, opacity: 0 }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                  transition: { delay: 0.2 * id },
                }}
                viewport={{ once: true }}
              >
                <p className="hello">{icon}</p>
                <p className="text-center">{description}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
      {/* Skills */}
      <div
        className="min-h-screen flex justify-center items-center flex-col"
        id="Projects"
      >
        <motion.h1
          className="text-center mb-16 text-4xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 3 } }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h1>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1, transition: { duration: 3 } }}
          viewport={{ once: true }}
        >
          <img
            className="rounded-4xl border-1 border-dashed border-red-500 p-3"
            src={project}
            alt=""
            width={400}
          />
        </motion.div>
      </div>
      <div id="Links" className="border-t border-gray-800 flex flex-col p-5">
        <motion.h1
          className="mx-auto mb-4 text-3xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { delay: 0.5, duration: 2 } }}
          viewport={{ once: true }}
        >
          My Links
        </motion.h1>
        <ul className="flex gap-10 mx-auto">
          {links.map(({ id, icon, anchor }) => (
            <motion.li
              key={id}
              className="bg-[#4A4A4A] p-3 rounded-xl text-xl"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: { delay: 0.3 * id },
              }}
              viewport={{ once: true }}
            >
              <a href={anchor} target="_blank">
                {icon}
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </ThemeProvider>
  );
}

export default App;
