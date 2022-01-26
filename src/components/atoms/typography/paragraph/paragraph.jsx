import React from 'react';
import PropTypes from 'prop-types';
import styles from './paragraph.module.scss';

const Paragraph = ({ className, children }) => (
  <p className={`${className} ${styles.paragraph}`}>{children}</p>
);

Paragraph.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Paragraph.defaultProps = {
  className: '',
};

export default Paragraph;
