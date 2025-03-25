import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import styles from "../App.module.css";
import rehypeRaw from "rehype-raw";

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
  description,
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
    <div>
      <img src={heroimage} alt={name} className={styles.heroImage} />
      <div>{name}</div>
      <div>{description}</div>
      <div>{technologies.join(", ")}</div>
      {githubUrl && (
        <div>
          <a href={githubUrl}>{githubUrl}</a>
        </div>
      )}
      <ReactMarkdown className={styles.markdown} rehypePlugins={[rehypeRaw]}>{markdown}</ReactMarkdown>
      <button onClick={back}>Back</button>
    </div>
  );
};

export default ProjectDetails;
