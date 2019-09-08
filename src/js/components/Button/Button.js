import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({ link, alignment }) => (
  <div
    className="arrow-btn--wrapper"
    style={{ justifyContent: `${alignment}` }}
  >
    <a
      className="arrow-btn--container"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {' '}
    view full story
      <div
        className="arrow-btn"
      >
        <svg viewBox="0 0 40 40" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
          <path className="arrow-1" d="M22.542 10.102l-2.217 2.217 5.583 5.543H8.46v3.12h17.448l-5.583 5.542 2.217 2.217 9.278-9.32z" />
          <path className="arrow-2" d="M22.542 10.102l-2.217 2.217 5.583 5.543H8.46v3.12h17.448l-5.583 5.542 2.217 2.217 9.278-9.32z" />
        </svg>
      </div>
    </a>
  </div>
);

Button.propTypes = {
  link: PropTypes.string.isRequired,
};

export default Button;
