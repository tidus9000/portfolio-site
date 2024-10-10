import React from "react";

interface CardProps {
  name: string;
  description: string;
  imageUrl: string;
  onSelectItem: () => void;
}

const Card = ({ name, description, imageUrl, onSelectItem }: CardProps) => {
  return (
    <div onClick={onSelectItem}>
      <img src={imageUrl} alt={name} />
      <div>{name}</div>
      <div>{description}</div>
    </div>
  );
};

export default Card;
