import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../shared/Button';
import InputForm from '../shared/InputForm';
import styles from '../styles/auth.module.scss';

const Signup: React.FC = () => {
  return (
    <div className={styles.authFormWrapper}>
      <div className={styles.authFormContainer}>
        <h1>Sign up</h1>
        <form>
          <InputForm
            placeholder="Enter your username"
            name="userName"
            type="text"
          />
          <InputForm placeholder="Enter your email" name="email" type="email" />
          <InputForm
            placeholder="Enter your password"
            name="password"
            type="password"
          />
          <Button text="SIGN UP" submit />
        </form>
        <div className={styles.bottomContent}>
          <p>Already a member?</p>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
