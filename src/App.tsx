import { Analytics } from "@vercel/analytics/react";
import { useState } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import ListGroup from "./components/ListGroup";
import video from "./assets/Background_Video.mp4";
import Portfolio from "./pages/Portfolio";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import styles from "./App.module.css";

let items = ["Home", "Portfolio", "About Me", "Contact"];

function App() {
  const handleSelectItem = (index: number) => {
    setListSelection(index);
  };

  const [listOpen] = useState(true);
  const [listSelection, setListSelection] = useState(0);

  const renderPage = () => {
    switch (listSelection) {
      case 0:
        return <Home className={styles.contentContainer} />;
      case 1:
        return <Portfolio className={styles.contentContainer} />;
      case 2:
        return <AboutMe className={styles.contentContainer} />;
      case 3:
        return <Contact className={styles.contentContainer} />;
      case 4:
        return <Blog className={styles.contentContainer} />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.appContainer}>
      <video autoPlay loop muted className={styles.background}>
        <source src={video} type="video/mp4" />
      </video>
      <div className={styles.backgroundOverlay}></div>
      <h1 className={styles.header}>Arthur Mudney</h1>
      <div className={styles.siteContainer}>
        <div className={styles.listAndContentContainer}>
          <div className={styles.listMenuContainer}>
            <ListGroup
              items={items}
              heading={"Menu"}
              onSelectItem={handleSelectItem}
              listOpen={listOpen}
            />
          </div>
          <div className={styles.contentWrapper}>
            <SwitchTransition>
              <CSSTransition
                key={listSelection}
                timeout={500}
                classNames={{
                  enter: styles.pageEnter,
                  enterActive: styles.pageEnterActive,
                  exit: styles.pageExit,
                  exitActive: styles.pageExitActive,
                }}
                unmountOnExit
              >
                {renderPage()}
              </CSSTransition>
            </SwitchTransition>
            <Analytics />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
