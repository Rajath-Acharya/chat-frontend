import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../shared/Button';
import InputForm from '../shared/InputForm';
import styles from '../styles/auth.module.scss';

const Login: React.FC = () => {
  return (
    <div className={styles.authFormWrapper}>
      <div className={styles.authFormContainer}>
        <h1>Login</h1>
        <form>
          <InputForm placeholder="Enter your email" name="email" type="email" />
          <InputForm
            placeholder="Enter your password"
            name="password"
            type="password"
          />
          <Button text="LOGIN" submit />
        </form>
        <div className={styles.bottomContent}>
          <p>Not a member?</p>
          <Link to="/signup">Create Account</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
