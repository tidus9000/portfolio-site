import React from "react";

interface HomeProps {
  className?: string;
}
const Home: React.FC<HomeProps> = ({ className }) => {
  return <div className={className}>home</div>;
};

export default Home;
