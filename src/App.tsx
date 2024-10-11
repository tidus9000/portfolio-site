import { useState } from "react";
import Message from "./message";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import video from "./assets/Background_Video.mp4";
import Portfolio from "./pages/Portfolio";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import styles from "./App.module.css";

let items = ["Home", "Portfolio", "About Me", "Contact", "Blog"];

function App() {
  const handleSelectItem = (item: string, index: number) => {
    setListSelection(index);
  };
  const handleClickButton = () => {
    setAlertState(true);
  };

  const [alertState, setAlertState] = useState(false);
  const [listOpen, setListOpen] = useState(false);
  const [listSelection, setListSelection] = useState(-1);

  return (
    <div>
      <video autoPlay loop muted className={styles.background}>
        <source src={video} type="video/mp4" />
      </video>
      <h1>Arthur Mudney</h1>
      <div className={styles.listAndContentContainer}>
        <div className={styles.listMenuContainer}>
          <Button
            onClicked={() => {
              setListOpen(!listOpen);
            }}
          >
            Toggle List
          </Button>
          <ListGroup
            items={items}
            heading={""}
            onSelectItem={handleSelectItem}
            listOpen={listOpen}
          />
        </div>
        <div>
          {listSelection === 0 && <Home className={styles.contentContainer} />}
          {listSelection === 1 && (
            <Portfolio className={styles.contentContainer} />
          )}
          {listSelection === 2 && (
            <AboutMe className={styles.contentContainer} />
          )}
          {listSelection === 3 && (
            <Contact className={styles.contentContainer} />
          )}
          {listSelection === 4 && <Blog className={styles.contentContainer} />}
        </div>
      </div>
    </div>
  );
}

export default App;
