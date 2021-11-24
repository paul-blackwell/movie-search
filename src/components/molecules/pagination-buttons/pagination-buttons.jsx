import React from 'react';
import PropTypes from 'prop-types';
import styles from './pagination-buttons.module.scss';
import ButtonArrow from '../../atoms/button-arrow/button-arrow';

const PaginationButtons = ({
  className,
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
};

PaginationButtons.defaultProps = {
  className: '',
};

export default PaginationButtons;
