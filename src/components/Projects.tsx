import { motion } from 'framer-motion';

const projects = [
  {
    title: "Tour Buddy",
    desc: "Travel companion app with Email.js chatbot, responsive UI, and SEO optimization.",
    tech: ["React", "Redux", "MUI", "Bootstrap", "MongoDB", "Nodejs", "Express"],
    link: "https://github.com/SoumyaRanjanBhanja1/Projects",
  },
  {
    title: "E-Shopping App",
    desc: "Feature-rich MERN app with Razorpay, JWT, OTP Login, Google OAuth, and Redux Toolkit.",
    tech: ["MERN", "MUI", "TypeScript"],
    link: "https://github.com/SoumyaRanjanBhanja1/Projects",
  },
   {
    title: "Portfolio",
    desc: "Feature-rich MERN app with JWT, OTP Login and Admin Dasboard.",
    tech: ["MERN", "Redux", "MUI", "TypeScript", "Tailwindcss"],
    link: "https://github.com/SoumyaRanjanBhanja1/Projects",
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 rounded-sm px-6 bg-gray-100 dark:bg-gray-800">
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-800 dark:text-white animate-pulse">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2 cursor-pointer">{project.desc}</p>
            <div className="flex gap-2 flex-wrap mt-4">
              {project.tech.map((tech, idx) => (
                <span key={idx} className="text-sm cursor-pointer bg-blue-100 dark:bg-blue-700 dark:text-white text-blue-800 px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
            <a href={project.link} target="_blank" className="inline-block mt-4 text-sm text-blue-500 hover:underline">
              View Project
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
