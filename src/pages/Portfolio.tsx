import React from "react";
import { useState } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import Card from "../components/Card";
import ProjectDetails from "../components/ProjectDetails";
import projects from "../assets/portfolio.json";
import styles from "../App.module.css";

interface PortfolioProps {
  className?: string;
}

const Portfolio: React.FC<PortfolioProps> = ({ className }) => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const renderPage = () => {
    switch (activeIndex) {
      case -1:
        return projects.map((project, index) => (
          <Card
            className={styles.card}
            key={index}
            name={project.name}
            description={project.description}
            imageUrl={project.image}
            onSelectItem={() => setActiveIndex(index)}
          />
        ));
      default:
        return (
          <ProjectDetails
            name={projects[activeIndex].name}
            description={projects[activeIndex].description}
            technologies={projects[activeIndex].technologies}
            heroimage={projects[activeIndex].image}
            markdownFile={projects[activeIndex].markdown}
            back={() => setActiveIndex(-1)}
          />
        );
    }
  };

  return (
    <div className={className}>
      <SwitchTransition>
        <CSSTransition
          key={activeIndex}
          timeout={500}
          classNames={{
            enter: styles.pageEnter,
            enterActive: styles.pageEnterActive,
            exit: styles.pageExit,
            exitActive: styles.pageExitActive,
          }}
          unmountOnExit
        >
          <div className={styles.cardsContainer}>{renderPage()}</div>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
};

export default Portfolio;
