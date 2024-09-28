// import Image from "next/image";
import Navbar from "./components/Navbar";
import Contributors from "./contributors/page";
import Learn from "./learn/page";
import Projects from "./projects/page";

export default function Home() {
  return (
    <div>
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-3xl">Welcome to the Hacktoberfest App</h1>
        <Navbar />
      </header>

      <main className="p-4">
        <h2 className="text-2xl font-bold">Featured Sections</h2>
        <section>
          <h3 className="text-xl font-semibold">Projects Showcase</h3>
          <Projects />
        </section>

        <section>
          <h3 className="text-xl font-semibold">GitHub Contributors</h3>
          <Contributors />
        </section>

        <section>
          <h3 className="text-xl font-semibold">Learning Hub</h3>
          <Learn />
        </section>
      </main>

      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>© 2024 Hacktoberfest App. All rights reserved.</p>
      </footer>
    </div>
  );
}
