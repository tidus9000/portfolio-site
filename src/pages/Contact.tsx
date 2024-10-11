import React from "react";

interface ContactProps {
  className?: string;
}
const Contact: React.FC<ContactProps> = ({ className }) => {
  return <div className={className}>Contact</div>;
};

export default Contact;
