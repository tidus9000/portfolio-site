import React from "react";
import { useState } from "react";

import Card from "../components/Card";
import ProjectDetails from "../components/ProjectDetails";
import projects from "../assets/portfolio.json";

const Portfolio = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  return (
    <div>
      {activeIndex === -1 &&
        projects.map((project, index) => (
          <Card
            key={index}
            name={project.name}
            description={project.description}
            imageUrl={project.image}
            onSelectItem={() => setActiveIndex(index)}
          />
        ))}
      {activeIndex !== -1 && (
        <ProjectDetails
          name={projects[activeIndex].name}
          description={projects[activeIndex].description}
          technologies={projects[activeIndex].technologies}
          heroimage={projects[activeIndex].image}
          markdownFile={projects[activeIndex].markdown}
          back={() => setActiveIndex(-1)}
        />
      )}
    </div>
  );
};

export default Portfolio;
