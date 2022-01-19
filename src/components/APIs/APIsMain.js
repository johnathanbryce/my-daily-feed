// api key for newsapi.org: b3eb45134604439f9a86135bf1ae81c6
import { useState, useEffect } from "react";
import axios from "axios";
import classes from "./APIsMain.module.css";

import CanucksCard from "./MainContent/CanucksCard";
import NewsCard from "./MainContent/NewsCard";
import CSSArticleCard from "./MainContent/CSSArticleCard";

// TODO look into past projects local storage in order to keep the deleted state of the articles!!

function APIsMain() {
  // fetching APIs
  const [fetchedDataNews, setFetchedDataNews] = useState([]);
  const [fetchedDataCSS, setFetchedDataCSS] = useState([]);
  const [fetchedDataCanucks, setFetchedDataCanucks] = useState([]);
  // managing loading state for APIs
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setIsLoading(true);

    // API Fetches
    const dataFetchNews = await axios.get(
      "https://newsapi.org/v2/top-headlines?country=ca&apiKey=b3eb45134604439f9a86135bf1ae81c6"
    );

    const dataFetchCSS = await axios.get(
      "https://newsapi.org/v2/everything?q=css&apiKey=b3eb45134604439f9a86135bf1ae81c6"
    );

    const dataFetchCanucks = await axios.get(
      "https://newsapi.org/v2/everything?q=canucks&apiKey=b3eb45134604439f9a86135bf1ae81c6"
    );

    // transformed requests to properly display article card components
    const transformedNews = [...dataFetchNews.data.articles].map((article) => {
      return {
        title: article.title,
        url: article.url,
        image: article.urlToImage,
        source: article.source.name,
        id: Math.random(),
      };
    });

    const transformedCSS = [...dataFetchCSS.data.articles].map((article) => {
      return {
        title: article.title,
        url: article.url,
        image: article.urlToImage,
        source: article.source.name,
        id: Math.random(),
      };
    });

    const transformedCanucks = [...dataFetchCanucks.data.articles].map(
      (article) => {
        return {
          title: article.title,
          url: article.url,
          image: article.urlToImage,
          source: article.source.name,
          id: Math.random(),
        };
      }
    );

    setFetchedDataNews(transformedNews);
    setFetchedDataCSS(transformedCSS);
    setFetchedDataCanucks(transformedCanucks);

    setIsLoading(false);
  };

  // removing individually selected articles from each content section
  const removeArticle = (id) => {
    const updatedArticlesCanucks = fetchedDataCanucks.filter(
      (article) => article.id !== id
    );

    const updatedArticlesNews = fetchedDataNews.filter(
      (article) => article.id !== id
    );

    const updatedArticlesCSS = fetchedDataCSS.filter(
      (article) => article.id !== id
    );

    setFetchedDataCanucks(updatedArticlesCanucks);
    setFetchedDataNews(updatedArticlesNews);
    setFetchedDataCSS(updatedArticlesCSS);
  };

  return (
    <div className={classes.body_container}>
      <h2 className={classes.content_header}> Canadian News </h2>
      <div className={classes.container}>
        {!isLoading && fetchedDataNews.length > 0 && (
          <div className={classes.flex_container}>
            {fetchedDataNews.map((news, i) => {
              return (
                <NewsCard
                  id={news.id}
                  key={i}
                  url={news.url}
                  img={news.image || "no image available"}
                  title={news.title}
                  source={news.source}
                  onClick={removeArticle}
                />
              );
            })}
          </div>
        )}

        {!isLoading && fetchedDataNews.length === 0 && (
          <h4> No Canadian News articles found... </h4>
        )}
        {isLoading && <h4> Loading articles... </h4>}
      </div>

      <h2 className={classes.content_header}> Canucks </h2>
      <div className={classes.container}>
        {!isLoading && fetchedDataCanucks.length > 0 && (
          <div className={classes.flex_container}>
            {fetchedDataCanucks.map((canucks, i) => {
              return (
                <CanucksCard
                  id={canucks.id}
                  key={i}
                  url={canucks.url}
                  img={canucks.image || "no image available"}
                  title={canucks.title}
                  source={canucks.source}
                  onClick={removeArticle}
                />
              );
            })}
          </div>
        )}

        {!isLoading && fetchedDataCanucks.length === 0 && (
          <h4> No Canucks articles found... </h4>
        )}
        {isLoading && <h4> Loading articles... </h4>}
      </div>

      <h2 className={classes.content_header}> CSS </h2>
      <div className={classes.container}>
        {!isLoading && fetchedDataCSS.length > 0 && (
          <div className={classes.flex_container}>
            {fetchedDataCSS.map((css, i) => {
              return (
                <CSSArticleCard
                  id={css.id}
                  key={i}
                  url={css.url}
                  img={css.image || "no image available"}
                  title={css.title}
                  source={css.source}
                  onClick={removeArticle}
                />
              );
            })}
          </div>
        )}

        {!isLoading && fetchedDataCSS.length === 0 && (
          <h4> No CSS articles found... </h4>
        )}
        {isLoading && <h4> Loading articles... </h4>}
      </div>
    </div>
  );
}

export default APIsMain;
