import React from "react";

interface Props {
  name: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  heroimage: string;
  markdown: string;
  back: () => void;
}

const ProjectDetails = ({
  name,
  description,
  technologies,
  githubUrl,
  heroimage,
  markdown,
  back,
}: Props) => {
  return (
    <div>
      <img src={heroimage} alt={name} />
      <div>{name}</div>
      <div>{description}</div>
      <div>{technologies.join(", ")}</div>
      <div>{githubUrl}</div>
      <div>{markdown}</div>
      <button onClick={back}>Back</button>
    </div>
  );
};

export default ProjectDetails;
