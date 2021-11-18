import React from 'react';
import PropTypes from 'prop-types';
import styles from './call-to-action.module.scss';
import ButtonSecondary from '../../atoms/button-secondary/button-secondary';

const CallToAction = ({ className }) => (
  <div className={`${className} ${styles['call-to-action']}`}>
    <h4 className={styles['call-to-action__heading']}>Sign up today!</h4>
    <p className={styles['call-to-action__para']}>Lorem ipsum dolor si amet</p>
    <ButtonSecondary onClick={() => console.log('CallToAction button was clicked')}>Make an account</ButtonSecondary>
  </div>
);

CallToAction.propTypes = {
  className: PropTypes.string,
};

CallToAction.defaultProps = {
  className: '',
};

export default CallToAction;
