import React from "react";

interface HomeProps {
  className?: string;
}
const Home: React.FC<HomeProps> = ({ className }) => {
  return <div className={className}>Hi! Thanks for visiting my portfolio site! Here you can find a range of projects that I've worked on as well as my work history and some details about myself. Please have a look around and if you want to reach out, my details are on the contact page</div>;
};

export default Home;
