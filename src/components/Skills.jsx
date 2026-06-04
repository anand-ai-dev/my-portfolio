import { motion } from "framer-motion";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Tailwind CSS",
  "Git",
  "GitHub",
  "Python",
  "AI/ML",
];

function Skills() {
  return (
    <section
      id="skills"
      className="bg-slate-950 text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-cyan-400"
        >
          Skills
        </motion.h2>

        <p className="text-center text-gray-400 mt-4">
          Technologies I use to build modern web applications.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16">

          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
              }}
              className="
                bg-slate-800
                p-6
                rounded-xl
                text-center
                border
                border-slate-700
                hover:border-cyan-400
                transition
                cursor-pointer
              "
            >
              <h3 className="font-semibold">
                {skill}
              </h3>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Skills;