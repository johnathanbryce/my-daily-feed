import classes from "./Footer.module.css";
import linkedInIcon from "../../images/icons8-linkedin-48.png";
import githubIcon from "../../images/icons8-github-64.png";
import gmailIcon from "../../images/icons8-gmail-48.png";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.footer_content}>
        <p> website developed by: johnathan bryce</p>

        <div>
          <div className={classes.text_container}>
            <p>linkedin:</p>
            <a
              href="https://www.linkedin.com/in/johnathanbryce/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedInIcon} alt="LinkedIn's Favicon" height="45" />
            </a>
          </div>

          <div className={classes.text_container}>
            <p>github:</p>
            <a
              href="https://github.com/johnathanbryce"
              target="_blank"
              rel="noreferrer"
            >
              <img src={githubIcon} alt="GitHub's Favicon" height="45" />
            </a>
          </div>

          <div className={classes.text_container}>
            <p>email:</p>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=johnathanbryce@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <img src={gmailIcon} alt="Gmail's Favicon" height="45" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
