import CSSArticleCard from "./CSSArticleCard";
import classes from "../API UI/ArticlesList.module.css";

const ProgrammingList = (props) => {
  return (
    <div className={classes.articles_list}>
      {props.articles.map((css, i) => {
        return (
          <CSSArticleCard
            key={i}
            url={css.url}
            img={css.image || "no image available"}
            title={css.title}
            source={css.source}
          />
        );
      })}
    </div>
  );
};

export default ProgrammingList;
