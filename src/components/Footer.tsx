const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-6 text-center">
      <p className="text-gray-600 dark:text-gray-300 text-sm">
        &copy; {new Date().getFullYear()} Soumya Ranjan Bhanja. All rights reserved.
      </p>
      <div className="flex justify-center mt-2 gap-4 text-blue-600 dark:text-blue-400 text-xl">
        <a href="https://github.com/SoumyaRanjanBhanja1" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/soumya-ranjan-bhanja-270644247" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="mailto:soumyabhanja113@gmail.com">Email</a>
      </div>
    </footer>
  );
};

export default Footer;
