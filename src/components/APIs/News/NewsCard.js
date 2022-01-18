import classes from "../API UI/ArticleCard.module.css";

const NewsCard = (props) => {
  return (
    <div className={classes.articles_card}>
      <a href={`${props.url}`} target="_blank" rel="noreferrer">
        {" "}
        <img src={props.img} alt="" />{" "}
      </a>

      <div className={classes.articles_card_text}>
        <a href={`${props.url}`} target="_blank" rel="noreferrer">
          <h2> {props.title} </h2>
        </a>
        <p>
          <small> {props.source} </small>
        </p>
      </div>
    </div>
  );
};

export default NewsCard;
