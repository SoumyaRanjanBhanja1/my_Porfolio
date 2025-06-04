import ThemeToggle from './ThemeToggle';
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full  flex justify-between items-center px-6 py-4 bg-white dark:bg-gray-900 shadow z-50">
      <a href="https://www.linkedin.com/in/soumya-ranjan-bhanja-270644247" target="_blank"><h1 className="text-3xl font-light text-centre text-grey-600 dark:text-white font-mono animate-pulse">Soumya Ranjan Bhanja</h1></a>
      <div className="flex gap-4 items-center">
        <a href="#projects" className="hover:text-blue-600 animate-pulse">Projects</a>
<a href="#skills" className="hover:text-blue-600 left-2 animate-pulse">Skills</a>
<a href="#experience" className="hover:text-blue-600 animate-pulse">Experience</a>
<a href="#contact" className="hover:text-blue-600 animate-pulse">Contact</a>
<Link
  to="/LoginWithOtp"
  className="hover:text-blue-600 animate-pulse"
>
  Login
</Link>

       {/* <a
  href="/Soumya_Ranjan_Bhanja_Resume.pdf"
  download
  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
>
  Download Resume
</a> */}

        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
