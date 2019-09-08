import React, { useState, useEffect } from 'react';
import './News.scss';
import Hero from '../Hero';
import NewsArticle from '../NewsArticle';
import Loader from '../Loader';
import fetchData from '../../utils/fetchData';
import cleanArticleContent from '../../utils/cleanArticleContent';

const News = () => {
  const [topStories, setTopStories] = useState([]);
  const [featuredStory, setFeaturedStory] = useState([]);
  const [isFeaturedStoryLoaded, setFeaturedStoryLoaded] = useState(false);
  const [isTopStoriesLoaded, setTopStoriesLoaded] = useState(false);

  const getSingleStory = (articleArray) => {
    const randomArrNumber = Math.floor(Math.random() * Math.floor(6));
    const newArr = [];
    const singleFeaturedStory = articleArray[randomArrNumber];
    newArr.push(singleFeaturedStory);

    return newArr;
  };

  useEffect(() => {
    const getStories = () => {
      // Getting Top News Data from Lambda Function
      fetchData('getTopNewsFn')
        .then(articleArray => cleanArticleContent(articleArray))
        .then((articleArray) => {
          setTopStories(articleArray);
          setTopStoriesLoaded(true);
        });

      // Getting all Featured News data from Lambda Function
      fetchData('getTopNewsFn')
        .then((articleArray) => {
          // Sending featured stories array and returning single story
          const featuredStoryObj = getSingleStory(articleArray);
          return featuredStoryObj;
        })
        .then(featuredStoryObj => cleanArticleContent(featuredStoryObj))
        .then((featuredStoryObj) => {
          setFeaturedStory(featuredStoryObj);
          setFeaturedStoryLoaded(true);
        });
    };
    getStories();
  }, []);

  return (
    <React.Fragment>
      {!isFeaturedStoryLoaded
        ? <Loader />
        : (
          <Hero
            hero={featuredStory[0].urlToImage}
            headline={featuredStory[0].title}
            subHeadline={featuredStory[0].description}
            description={featuredStory[0].cleanedContent}
            link={featuredStory[0].url}
            isLoaded={isFeaturedStoryLoaded}
          />
        )
      }
      <section className="News--container">
        <div className="News-content--container">
          <h2>TOP STORIES</h2>
          {!isTopStoriesLoaded
            ? <Loader />
            : (topStories.map(article => (
              <NewsArticle
                key={article.title}
                headline={article.title}
                subHeadline={article.description}
                description={article.cleanedContent}
                image={article.urlToImage}
                link={article.url}
              />
            )))
          }
        </div>
      </section>
    </React.Fragment>
  );
};
export default News;
