// api key for newsapi.org: b3eb45134604439f9a86135bf1ae81c6
import { useState, useEffect } from "react";
import axios from "axios";
import classes from "./APIsMain.module.css";

import NewsList from "./News/NewsList.js";
import CanucksList from "./Canucks/CanucksList";
import CSSList from "./CSS Articles/CSSArticlesList.js";

function APIsMain() {
  const [fetchedDataNews, setFetchedDataNews] = useState([]);
  const [fetchedDataCSS, setFetchedDataCSS] = useState([]);
  const [fetchedDataCanucks, setFetchedDataCanucks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setLoading(true);

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

    // transformed requests to display
    const transformedNews = [...dataFetchNews.data.articles].map((article) => {
      return {
        title: article.title,
        url: article.url,
        image: article.urlToImage,
        source: article.source.name,
      };
    });

    const transformedCSS = [...dataFetchCSS.data.articles].map((article) => {
      return {
        title: article.title,
        url: article.url,
        image: article.urlToImage,
        source: article.source.name,
      };
    });

    const transformedCanucks = [...dataFetchCanucks.data.articles].map(
      (article) => {
        return {
          title: article.title,
          url: article.url,
          image: article.urlToImage,
          source: article.source.name,
        };
      }
    );

    // CSS API fetch

    setFetchedDataNews(transformedNews);
    setFetchedDataCSS(transformedCSS);
    setFetchedDataCanucks(transformedCanucks);
    setLoading(false);
  };

  return (
    <div className={classes.body_container}>
      <h2 className={classes.content_header}> Canadian News </h2>
      <div className={classes.container}>
        <NewsList articles={fetchedDataNews} />
      </div>

      <h2 className={classes.content_header}> Canucks </h2>
      <div className={classes.container}>
        <CanucksList articles={fetchedDataCanucks} />
      </div>

      <h2 className={classes.content_header}> CSS </h2>
      <div className={classes.container}>
        <CSSList articles={fetchedDataCSS} />
      </div>
    </div>
  );
}

export default APIsMain;
