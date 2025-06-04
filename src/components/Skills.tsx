import { motion } from 'framer-motion';

const skills = [
  "React.js", "Redux Toolkit", "Node.js", "Express.js", "MongoDB",
  "TypeScript", "JavaScript (ES6+)", "Material UI", "JWT", "Google OAuth",
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 rounded-xs px-6 bg-gray-100 dark:bg-gray-800">
      <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-10">Tech Stack</h2>
      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            className="bg-white dark:bg-gray-900 border dark:border-gray-700 text-gray-800 dark:text-white px-4 py-2 rounded-full shadow"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
