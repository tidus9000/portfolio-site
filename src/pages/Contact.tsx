import React from "react";
import styles from "../App.module.css";

interface ContactProps {
  className?: string;
}

const Contact: React.FC<ContactProps> = ({ className }) => {
  return (
    <div className={className}>
      <p>
        If you have work opportunities or projects you'd like to collaborate on, feel free to reach out to me!
      </p>
      <div className={styles.socialsContainer}>
        <a href="https://www.linkedin.com/in/arthur-muddiman/" target="_blank" rel="noopener noreferrer">
          <img className={styles.socialIcon} src="/assets/images/socials/LI-In-Bug.png" alt="LinkedIn" />
        </a>
        <a href="https://github.com/tidus9000" target="_blank" rel="noopener noreferrer">
          <img className={styles.socialIcon} src="\assets\images\socials\github-mark-white.png" alt="GitHub" />
        </a>
        <a href="https://bsky.app/profile/tidus9000.bsky.social" target="_blank" rel="noopener noreferrer">
          <img className={styles.socialIcon} src="public\assets\images\socials\bluesky_media_kit_logo_transparent_1.png" alt="Bluesky" />
        </a>
      </div>
    </div>
  );
};

export default Contact;