import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello, Hacktoberfest!");
});

app.get("/api/projects", (req, res) => {
  const projects = [
    {
      id: 1,
      name: "Open Source Project A",
      description: "Details about project A",
    },
    {
      id: 2,
      name: "Open Source Project B",
      description: "Details about project B",
    },
  ];
  res.json(projects);
});

app.get("/api/contributors", (req, res) => {
  const contributors = [
    { id: 1, username: "developerA", contributions: 5 },
    { id: 2, username: "developerB", contributions: 3 },
  ];
  res.json(contributors);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
