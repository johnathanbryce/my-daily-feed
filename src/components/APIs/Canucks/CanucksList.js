import CanucksCard from "./CanucksCard";
import classes from "../API UI/ArticlesList.module.css";

const CanucksList = (props) => {
  return (
    <div className={classes.articles_list}>
      {props.articles.map((canucks, i) => {
        return (
          <CanucksCard
            key={i}
            url={canucks.url}
            img={canucks.image || "no image available"}
            title={canucks.title}
            source={canucks.source}
          />
        );
      })}
    </div>
  );
};

export default CanucksList;
