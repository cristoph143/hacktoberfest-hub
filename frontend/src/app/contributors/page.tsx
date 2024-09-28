"use client";
import { useEffect, useState } from "react";

interface Contributor {
  id: number;
  username: string;
  contributions: number;
}

const Contributors = () => {
  const [contributors, setContributors] = useState<Contributor[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/contributors")
      .then((response) => response.json())
      .then((data: Contributor[]) => setContributors(data))
      .catch((error) => console.error("Error fetching contributors:", error));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">GitHub Contributors</h1>
      <ul className="mt-4">
        {contributors.map((contributor) => (
          <li key={contributor.id} className="border-b py-2">
            <strong>{contributor.username}</strong>: {contributor.contributions}{" "}
            contributions
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contributors;
