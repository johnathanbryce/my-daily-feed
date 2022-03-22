import classes from "./Disclaimer.module.css";
import VideoPlayer from "react-video-js-player";
import disclaimer from "../../video/disclaimer.mp4";

const Modal = (props) => {
  const videoSrc = disclaimer;
  return (
    <div className={classes.modal}>
      <div className={classes.modal__header}>
        <h1> Disclaimer - Please Watch! </h1>
      </div>
      <div className={classes.modal__content}>
        <p>
          Unfortunately, the monthly cost in order for the 3 news API categories
          to properly data-fetch and load in a non-production environment far
          exceeds what I am able to spend on a portfolio project. In the case of
          the &nbsp;
          <a href="https://newsapi.org/" target="_blank" rel="noreferrer">
            <span class={classes.highlight}>newsapi.org </span> &nbsp;
          </a>
          <a
            href="https://newsapi.org/pricing"
            target="_blank"
            rel="noreferrer"
          >
            API's I have used in this project,{" "}
            <span class={classes.highlight}>
              the monthly fee would be around $449!{" "}
            </span>
            Other news API sites I tried also did not offer any financially
            feasible API options for non-production environments (such as
            gnews.io, newsdata.io, or mediastack.com ). As such, in order to
            demonstrate this site in a "live" setting I have included below a
            video demonstration of this application in my local/production
            environment where the cost is free and the data-fetching works as
            intended with my code.
          </a>
        </p>

        <div className={classes.video__container}>
          <VideoPlayer src={videoSrc} className={classes.video} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
