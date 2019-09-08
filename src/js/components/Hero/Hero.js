import React from 'react';
import PropTypes from 'prop-types';
import './Hero.scss';
import Button from '../Button';

const Hero = (props) => {
  const {
    hero,
    headline,
    subHeadline,
    description,
    link,
  } = props;

  return (
    <section className="Hero--wrapper">
      <div
        className="col-left"
        style={{ backgroundImage: `url(${hero})` }}
      />
      <div className="col-right">
        <article>
          <div className="section-header">
            <span className="highlight">
              FEATURED:
            </span>
          </div>
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
          <p>{description}</p>
          <Button
            link={link}
            alignment="flex-end"
          />
        </article>
      </div>
    </section>
  );
};

Hero.propTypes = {
  headline: PropTypes.string.isRequired,
  subHeadline: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  hero: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Hero;
