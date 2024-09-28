// src/app/components/Navbar.tsx
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className="hover:text-gray-300">
            Home
          </Link>
        </li>
        <li>
          <Link href="/projects" className="hover:text-gray-300">
            Projects
          </Link>
        </li>
        <li>
          <Link href="/contributors" className="hover:text-gray-300">
            Contributors
          </Link>
        </li>
        <li>
          <Link href="/learn" className="hover:text-gray-300">
            Learning Hub
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
