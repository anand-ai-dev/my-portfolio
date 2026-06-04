import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-950 text-white py-12 px-6"
    >
      <div className="max-w-4xl mx-auto text-center">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-cyan-400"
        >
          Contact Me
        </motion.h2>

        <p className="text-gray-400 mt-4">
          I'm always open to internships, collaborations,
          and exciting opportunities.
        </p>

        <div className="flex justify-center gap-8 mt-12 text-4xl">

          <a
            href="https://mail.google.com/mail/u/0/#inbox"
            className="hover:text-cyan-400 transition"
          >
            <FaEnvelope />
          </a>

          <a
            href="https://github.com/anand-ai-dev"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/anand-devarakonda/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaLinkedin />
          </a>

        </div>
      </div>
    </section>
  );
}

export default Contact;