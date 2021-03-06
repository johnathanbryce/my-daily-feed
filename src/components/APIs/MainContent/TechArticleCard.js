import classes from "./ArticleCard.module.css";

const TechnologyArticleCard = (props) => {
  const handleDelete = () => {
    props.onClick(props.id);
  };

  return (
    <div className={classes.articles_card}>
      <a href={`${props.url}`} target="_blank" rel="noreferrer">
        <img src={props.img} alt="" />
      </a>

      <div className={classes.articles_card_text}>
        <a href={`${props.url}`} target="_blank" rel="noreferrer">
          <h2> {props.title} </h2>
        </a>

        <button className={classes.btn_close} onClick={handleDelete}>
          {" "}
          X{" "}
        </button>
        <p>
          <small> {props.source} </small>
        </p>
      </div>
    </div>
  );
};

export default TechnologyArticleCard;
