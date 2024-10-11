import { useState } from "react";
import styles from "../App.module.css";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string, index: number) => void;
  listOpen?: boolean;
}

function ListGroup({ items, heading, onSelectItem, listOpen }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No Items</p>}
      {listOpen && (
        <ul className={styles.listMenu}>
          {items.map((item, index) => (
            <li
              className={
                selectedIndex === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              key={index}
              onClick={() => {
                setSelectedIndex(index);
                onSelectItem(item, index);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default ListGroup;
