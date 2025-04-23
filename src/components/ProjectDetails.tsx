import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import styles from "../App.module.css";
import rehypeRaw from "rehype-raw";
import Button from "./Button";

interface Props {
  name: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  heroimage: string;
  markdownFile: string;
  back: () => void;
}

const ProjectDetails = ({
  name,
  technologies,
  githubUrl,
  heroimage,
  markdownFile,
  back,
}: Props) => {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch(markdownFile)
      .then((response) => response.text())
      .then((text) => setMarkdown(text));
  }, [markdownFile]);

  return (
    <div className={styles.projectDetailsContainer}>
      <img src={heroimage} alt={name} className={styles.heroImage} />
      <div>Technologies: {technologies.join(", ")}</div>
      {githubUrl && (
        <div>
          <a href={githubUrl}>{githubUrl}</a>
        </div>
      )}
      <ReactMarkdown className={styles.markdown} rehypePlugins={[rehypeRaw]}>{markdown}</ReactMarkdown>
      <Button onClicked={back} colour="secondary">Back</Button>
    </div>
  );
};

export default ProjectDetails;
