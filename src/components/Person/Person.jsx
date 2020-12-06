import React from 'react';
import styles from './Person.module.css';

const Person = () => {
  return (
    <div className={styles.person}>
      <span className={styles.avatar} />
      <span className={styles.name}>John Moore</span>
    </div>
  );
};

export default Person;
