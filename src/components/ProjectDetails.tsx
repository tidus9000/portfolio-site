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

const ProjectDetails = () => {
  return <div>ProjectDetails</div>;
};

export default ProjectDetails;
