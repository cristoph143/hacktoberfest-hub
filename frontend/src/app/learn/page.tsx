"use client";
interface LearningResource {
  id: number;
  title: string;
  link: string;
  description: string;
}

const Learn = () => {
  // Sample data for learning resources
  const learningResources: LearningResource[] = [
    {
      id: 1,
      title: "FreeCodeCamp",
      link: "https://www.freecodecamp.org/",
      description: "Learn to code for free!",
    },
    {
      id: 2,
      title: "Codecademy",
      link: "https://www.codecademy.com/",
      description: "Interactive coding lessons.",
    },
    {
      id: 3,
      title: "Udemy",
      link: "https://www.udemy.com/",
      description: "Paid and free courses on various topics.",
    },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Learning Hub</h1>
      <p className="mt-4">
        Welcome to the Learning Hub! Here, you can find resources, tutorials,
        and guides to enhance your skills in open-source development.
      </p>
      <ul className="mt-4">
        {learningResources.map((resource) => (
          <li key={resource.id} className="py-2">
            <a
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              <strong>{resource.title}</strong>
            </a>
            : {resource.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Learn;
