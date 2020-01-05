import React from 'react';
import PropTypes from 'prop-types';
import './NewsArticle.scss';
import NewsArticleAccent from '../NewsArticleAccent';
import Button from '../Button';

const NewsArticle = (props) => {
  const {
    headline, subHeadline, description, image, link,
  } = props;
  return (
    <article className="NewsArticle--container">
      <h1>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {headline}
        </a>
      </h1>
      <h3>{subHeadline}</h3>
      <p>{description || 'No article content available.'}</p>
      <Button
        link={link}
        alignment="flex-start"
      />
      <div
        className="newArticle-img--container"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <h1 role="presentation">{headline}</h1>
      </div>
      <NewsArticleAccent />
    </article>
  );
};

NewsArticle.propTypes = {
  headline: PropTypes.string.isRequired,
  subHeadline: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

NewsArticle.defaultProps = {
  description: 'No article content available.',
};

export default NewsArticle;
