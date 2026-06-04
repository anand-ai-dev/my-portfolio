import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profile from "../assets/passport.png";
import { TypeAnimation } from "react-type-animation";
function Hero() {
  return (
    <section id="home">
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-slate-950 text-white px-6 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[500px] h-[500px] bg-cyan-500/20 blur-3xl rounded-full"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl">

        {/* Profile Image */}
        <motion.img
          src={profile}
          alt="Anand"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-40 h-40 md:w-48 md:h-48 rounded-full mx-auto mb-8 border-4 border-cyan-500 shadow-xl object-cover"
        />

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold"
        >
          Hi, I'm Anand 👋
        </motion.h1>

        {/* Sub Heading */}
      <div className="mt-4">
       <TypeAnimation
          sequence={[
            "Aspiring Full Stack Developer",
            2000,
            "MERN Stack Developer",
            2000,
            "AI & Web Development Enthusiast",
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="text-2xl md:text-4xl text-cyan-400"
        />
        </div>
        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto"
        >
          B.Tech AIML Student passionate about building modern
          web applications using React, Node.js, MongoDB and AI technologies.
        </motion.p>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex justify-center gap-6 mt-8 text-3xl"
        >
          <a
            href="https://github.com/anand-ai-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 hover:scale-125 transition duration-300"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/anand-devarakonda/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 hover:scale-125 transition duration-300"
          >
            <FaLinkedin />
          </a>

        </motion.div>
        <div className="mt-8">
            <a
              href="/resume.pdf"
              download
              className="bg-green-500 px-6 py-3 rounded-lg font-semibold hover:bg-green-600"
            >
              Download Resume
            </a>
        </div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
        >
          <button className="bg-cyan-500 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-600 transition duration-300">
            View Projects
          </button>

          <button className="border border-cyan-500 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-500 hover:text-black transition duration-300">
            Contact Me
          </button>
        </motion.div>

      </div>
    </section>
    </section>
  );
}

export default Hero;