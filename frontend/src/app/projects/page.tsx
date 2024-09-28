"use client";

import { useEffect, useState } from "react";

interface Project {
  id: number;
  name: string;
  description: string;
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/projects")
      .then((response) => response.json())
      .then((data: Project[]) => setProjects(data))
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Open Source Projects</h1>
      <ul className="mt-4">
        {projects.map((project) => (
          <li key={project.id} className="border-b py-2">
            <strong>{project.name}</strong>: {project.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
