import React from 'react';
import PropTypes from 'prop-types';
import styles from './popular-section.module.scss';
import SecondaryHeading from '../../atoms/typography/secondary-heading/secondary-heading';

const PopularSection = ({ className }) => (
  <section className={`${styles['popular-section']} ${className}`}>
    <SecondaryHeading>Popular on MovieSearch</SecondaryHeading>
  </section>
);

PopularSection.propTypes = {
  className: PropTypes.string,
};

PopularSection.defaultProps = {
  className: '',
};

export default PopularSection;
