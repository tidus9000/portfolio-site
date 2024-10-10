import React from "react";
import { useState } from "react";

import Card from "../components/Card";
import projects from "../assets/portfolio.json";

const Portfolio = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  return (
    <div>
      {projects.map((project, index) => (
        <Card
          key={index}
          name={project.name}
          description={project.description}
          imageUrl={project.image}
          onSelectItem={() => console.log("Clicked", index)}
        />
      ))}
    </div>
  );
};

export default Portfolio;
