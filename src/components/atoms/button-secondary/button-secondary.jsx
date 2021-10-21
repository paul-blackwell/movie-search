import React from "react";
import PropTypes from "prop-types";
import styles from '../button-secondary/button-secondary.module.scss';

const ButtonSecondary = ({ onClick, children }) => <button type="button" onClick={onClick} className={styles['button-secondary']}>{children}</button>;

ButtonSecondary.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default ButtonSecondary;
