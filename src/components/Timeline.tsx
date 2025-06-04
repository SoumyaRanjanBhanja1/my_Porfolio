const experiences = [
  {
    title: "React/MERN Stack Developer",
    company: "Brightcom Group Pvt. Ltd",
    duration: "Nov 2022 – Jul 2024",
    points: [
      "Built & optimized full-stack apps, reduced load time by 30%",
      "Implemented JWT auth, Google OAuth, Razorpay integration",
      "Enhanced UI with 20+ reusable MUI components",
    ],
  },
];

const Timeline = () => {
  return (
    <section id="timeline" className="py-20 rounded-xs px-6 bg-white dark:bg-gray-900">
      <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-10">Experience</h2>
      <div className="max-w-4xl mx-auto border-l-4 border-blue-600 dark:border-blue-400 pl-6">
        {experiences.map((exp, i) => (
          <div key={i} className="mb-10">
            <h3 className="text-xl font-bold text-blue-700 dark:text-blue-400">{exp.title}</h3>
            <p className="text-gray-500 dark:text-gray-300 text-sm">{exp.company} — {exp.duration}</p>
            <ul className="list-disc ml-5 mt-2 text-gray-700 dark:text-gray-300">
              {exp.points.map((point, j) => (
                <li key={j}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
