import React from 'react';
import PropTypes from 'prop-types';
import styles from './popular.module.scss';
import SecondaryHeading from '../../atoms/typography/secondary-heading/secondary-heading';

const Popular = ({ className }) => (
  <div className={`${styles.popular} ${className}`}>
    <SecondaryHeading>Popular on MovieSearch</SecondaryHeading>
  </div>
);

Popular.propTypes = {
  className: PropTypes.string,
};

Popular.defaultProps = {
  className: '',
};

export default Popular;
