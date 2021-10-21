import React from "react";
import PropTypes from "prop-types";
import styles from "../button-primary/button-primary.module.scss";

const ButtonPrimary = ({ children, handleClick }) => (
 <button type="button" onClick={handleClick} className={styles['button-primary']}>{children}</button>
);

ButtonPrimary.propTypes = {
    children: PropTypes.node.isRequired,
    handleClick: PropTypes.func.isRequired,
};

export default ButtonPrimary;
