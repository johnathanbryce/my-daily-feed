import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.footer_content}>
        <p> website created by: johnathan bryce</p>
        <div>
          <p> follow on github: </p>
          <p> follow on linkedin: </p>
          <p> email: johnathanbryce@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
