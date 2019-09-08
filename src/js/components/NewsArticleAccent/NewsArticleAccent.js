import React from 'react';
import PropTypes from 'prop-types';
import './NewsArticleAccent.scss';

const NewsArticleAccent = (props) => {
  const { direction } = props;

  return (
    <div
      className="corner-accent"
      role="presentation"
      style={{
        transform: `rotate(${direction}deg)`,
      }}
    />
  );
};

NewsArticleAccent.propTypes = {
  direction: PropTypes.number,
};

NewsArticleAccent.defaultProps = {
  direction: 0,
};

export default NewsArticleAccent;
