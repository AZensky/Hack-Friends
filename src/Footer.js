import React from "react";

function Footer() {
  return (
    <div className="footer-container">
      <div className="contact-container">
        <span>Contact Me:</span>
        <a
          href="https://www.linkedin.com/in/alex-zelinsky/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/AZensky"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        <a
          href="https://angel.co/u/alex-zelinsky-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          AngelList
        </a>
        <a
          href="https://medium.com/@alexzelinsky124"
          target="_blank"
          rel="noopener noreferrer"
        >
          Medium
        </a>
      </div>
    </div>
  );
}

export default Footer;
