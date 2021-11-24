import React from 'react';
import PropTypes from 'prop-types';
import styles from './popular-section.module.scss';
import SecondaryHeading from '../../atoms/typography/secondary-heading/secondary-heading';
import PaginationButtons from '../../molecules/pagination-buttons/pagination-buttons';

const PopularSection = ({ className }) => (
  <section className={`${styles['popular-section']} ${className}`}>
    <div className={styles['popular-section__title']}>
      <SecondaryHeading className={styles['popular-section__secondary-heading']}>Popular on MovieSearch</SecondaryHeading>
      <PaginationButtons />
    </div>
  </section>
);

PopularSection.propTypes = {
  className: PropTypes.string,
};

PopularSection.defaultProps = {
  className: '',
};

export default PopularSection;
