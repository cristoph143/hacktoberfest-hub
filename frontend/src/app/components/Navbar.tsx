// src/app/components/Navbar.tsx
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 shadow-md">
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className="hover:text-gray-300 transition">
            Home
          </Link>
        </li>
        <li>
          <Link href="/projects" className="hover:text-gray-300 transition">
            Projects
          </Link>
        </li>
        <li>
          <Link href="/contributors" className="hover:text-gray-300 transition">
            Contributors
          </Link>
        </li>
        <li>
          <Link href="/learn" className="hover:text-gray-300 transition">
            Learning Hub
          </Link>
        </li>
        <li>
          <Link href="/login" className="hover:text-gray-300 transition">
            Login
          </Link>
        </li>
        <li>
          <Link href="/signup" className="hover:text-gray-300 transition">
            Sign Up
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
