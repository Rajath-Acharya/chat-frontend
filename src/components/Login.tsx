import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { login } from '../api/auth.api';
import { LoginPayload } from '../helpers/auth.types';
import { ToasterType } from '../helpers/toaster.types';
import { toaster } from '../services/utils';
import Button from '../shared/Button';
import InputForm from '../shared/InputForm';

import styles from '../styles/Auth.module.scss';

const Login: React.FC = () => {
  const [formData, setFormData] = useState<LoginPayload>({
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const signIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await login(formData);
      toaster('Logged In', ToasterType.SUCCESS, { autoClose: 1000 });
      navigate('/dashboard/', { replace: true });
    } catch (error: any) {
      const errorMessage = error?.response?.data?.message ?? 'Failed to login';
      toaster(errorMessage, ToasterType.SUCCESS, { autoClose: 1000 });
    }
  };
  return (
    <div className={styles.authFormWrapper}>
      <div className={styles.authFormContainer}>
        <h1>Login</h1>
        <form>
          <InputForm
            onChange={handleInputChange}
            placeholder="Enter your email"
            name="email"
            type="email"
            required
          />
          <InputForm
            onChange={handleInputChange}
            placeholder="Enter your password"
            name="password"
            type="password"
            required
          />
          <Button onClick={signIn} text="LOGIN" submit />
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
