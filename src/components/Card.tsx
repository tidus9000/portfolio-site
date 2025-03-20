import styles from "../App.module.css";

interface CardProps {
  name: string;
  description: string;
  imageUrl: string;
  onSelectItem: () => void;
  className?: string;
}

const Card = ({
  name,
  description,
  imageUrl,
  onSelectItem,
  className,
}: CardProps) => {
  return (
    <div onClick={onSelectItem} className={className}>
      <img src={imageUrl} alt={name} className={styles.cardImage} />
      <div>{name}</div>
      <div>{description}</div>
    </div>
  );
};

export default Card;
