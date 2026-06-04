import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-cyan-400"
        >
          Anand
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-300 capitalize">

          <li>
            <Link
              to="/"
              className="hover:text-cyan-400 transition duration-300"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className="hover:text-cyan-400 transition duration-300"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="/skills"
              className="hover:text-cyan-400 transition duration-300"
            >
              Skills
            </Link>
          </li>

          <li>
            <Link
              to="/projects"
              className="hover:text-cyan-400 transition duration-300"
            >
              Projects
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              className="hover:text-cyan-400 transition duration-300"
            >
              Contact
            </Link>
          </li>

        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">
          <ul className="flex flex-col items-center py-4 gap-6 text-gray-300">

            <li>
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="hover:text-cyan-400"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className="hover:text-cyan-400"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="/skills"
                onClick={() => setIsOpen(false)}
                className="hover:text-cyan-400"
              >
                Skills
              </Link>
            </li>

            <li>
              <Link
                to="/projects"
                onClick={() => setIsOpen(false)}
                className="hover:text-cyan-400"
              >
                Projects
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="hover:text-cyan-400"
              >
                Contact
              </Link>
            </li>

          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;