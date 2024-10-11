import React from "react";

interface AboutMeProps {
  className?: string;
}
const AboutMe: React.FC<AboutMeProps> = ({ className }) => {
  return <div className={className}>About Me</div>;
};

export default AboutMe;
