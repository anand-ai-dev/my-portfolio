import { motion } from "framer-motion";

const projects = [
  {
    title: "Enterprise RAG Assistant",
    description:
      "AI-powered document retrieval system with semantic search and source citations.",
    tech: "React • FastAPI • FAISS • Gemini",
    github: "#",
    demo: "#",
  },
  {
    title: "Voice AI Healthcare Assistant",
    description:
      "Real-time multilingual healthcare assistant using voice interaction and AI.",
    tech: "React • TypeScript • AI APIs",
    github: "#",
    demo: "#",
  },
  {
    title: "Water Awareness App",
    description:
      "Mobile application promoting water conservation and awareness.",
    tech: "Flutter • Firebase",
    github: "#",
    demo: "#",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-900 text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-cyan-400"
        >
          Projects
        </motion.h2>

        <p className="text-center text-gray-400 mt-4">
          Some projects I've built while learning and exploring modern technologies.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
              }}
              className="
                bg-slate-800
                rounded-2xl
                p-6
                border
                border-slate-700
                hover:border-cyan-400
                transition
              "
            >

              <h3 className="text-xl font-semibold text-cyan-400">
                {project.title}
              </h3>

              <p className="text-gray-300 mt-4">
                {project.description}
              </p>

              <p className="text-sm text-gray-500 mt-4">
                {project.tech}
              </p>

              <div className="flex gap-4 mt-6">

                <a
                  href={project.github}
                  className="
                    px-4 py-2
                    bg-cyan-500
                    rounded-lg
                    hover:bg-cyan-600
                    transition
                  "
                >
                  GitHub
                </a>

                <a
                  href={project.demo}
                  className="
                    px-4 py-2
                    border
                    border-cyan-500
                    rounded-lg
                    hover:bg-cyan-500
                    hover:text-black
                    transition
                  "
                >
                  Demo
                </a>

              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;