import NewsCard from "./NewsCard";
import classes from "../API UI/ArticlesList.module.css";

const NewsList = (props) => {
  return (
    <div className={classes.articles_list}>
      {props.articles.map((news, i) => {
        return (
          <NewsCard
            key={i}
            url={news.url}
            img={news.image || "no image available"}
            title={news.title}
            source={news.source}
          />
        );
      })}
    </div>
  );
};

export default NewsList;
