import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-slate-900 text-white py-24 px-6 min-h-screen"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-bold text-center text-cyan-400"
        >
          About Me
        </motion.h2>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">

          {/* Left Card */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="bg-slate-800 p-8 rounded-2xl shadow-lg hover:shadow-cyan-500/20 transition"
          >
            <h3 className="text-2xl font-semibold mb-4 text-cyan-400">
              Who I Am
            </h3>

            <p className="text-gray-300 leading-8">
              I'm Anand Devarakonda, a B.Tech AIML student
              passionate about Full Stack Development and
              AI-powered applications.

              I enjoy building scalable web applications,
              learning modern technologies, and solving
              real-world problems through software.
            </p>
          </motion.div>

          {/* Right Card */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="bg-slate-800 p-8 rounded-2xl shadow-lg hover:shadow-cyan-500/20 transition"
          >
            <h3 className="text-2xl font-semibold mb-4 text-cyan-400">
              Education & Goals
            </h3>

            <p className="text-gray-300 leading-8">
              Currently pursuing B.Tech in Artificial
              Intelligence & Machine Learning.

              My goal is to become a professional Full Stack
              Developer while integrating AI into modern web
              applications and building impactful products.
            </p>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}

export default About;