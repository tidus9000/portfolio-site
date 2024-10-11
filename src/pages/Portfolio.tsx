import React from "react";
import { useState } from "react";

import Card from "../components/Card";
import ProjectDetails from "../components/ProjectDetails";
import projects from "../assets/portfolio.json";
import styles from "../App.module.css";

interface PortfolioProps {
  className?: string;
}

const Portfolio: React.FC<PortfolioProps> = ({ className }) => {
  const [activeIndex, setActiveIndex] = useState(-1);

  return (
    <div className={className}>
      <div className={styles.cardsContainer}>
        {activeIndex === -1 &&
          projects.map((project, index) => (
            <Card
              className={styles.card}
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
    </div>
  );
};

export default Portfolio;
