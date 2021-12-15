import React from 'react';
import PropTypes from 'prop-types';
import styles from './pagination-buttons.module.scss';
import ButtonArrow from '../../atoms/button-arrow/button-arrow';

const PaginationButtons = ({
  className,
  next,
  previous,
  disableLeft,
  disableRight,
}) => (
  <div className={`${className} ${styles['pagination-buttons']}`}>
    <ButtonArrow left disabled handleClick={() => console.log('left button clicked')} />
    <ButtonArrow
      right
      handleClick={() => console.log('right button clicked')}
      text="Next"
    />
  </div>
);

PaginationButtons.propTypes = {
  className: PropTypes.string,
  next: PropTypes.func.isRequired,
  previous: PropTypes.func.isRequired,
  disableLeft: PropTypes.bool.isRequired,
  disableRight: PropTypes.bool.isRequired,
};

PaginationButtons.defaultProps = {
  className: '',
};

export default PaginationButtons;
