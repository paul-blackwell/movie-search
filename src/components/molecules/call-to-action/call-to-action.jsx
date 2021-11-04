import React from 'react';
import styles from './call-to-action.module.scss';
import ButtonSecondary from '../../atoms/button-secondary/button-secondary';

const CallToAction = () => (
  <div className={styles['call-to-action']}>
    <h4 className={styles['call-to-action__heading']}>Sign up today!</h4>
    <p className={styles['call-to-action__para']}>Lorem ipsum dolor si amet</p>
    <ButtonSecondary onClick={() => console.log('CallToAction button was clicked')}>Make an account</ButtonSecondary>
  </div>
);

export default CallToAction;
