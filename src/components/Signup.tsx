import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { register } from '../api/auth.api';
import { RegisterPayload } from '../helpers/auth.types';
import { ToasterType } from '../helpers/toaster.types';
import { toaster } from '../services/utils';
import Button from '../shared/Button';
import InputForm from '../shared/InputForm';

import styles from '../styles/auth.module.scss';

const Signup: React.FC = () => {
  const [formData, setFormData] = useState<RegisterPayload>({
    userName: '',
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

  const signup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await register(formData);
      toaster('Account created', ToasterType.SUCCESS, { autoClose: 1000 });
      navigate('/login', { replace: true });
    } catch (error: any) {
      const errorMessage =
        error?.response?.data?.message ?? 'Failed to create account';
      toaster(errorMessage, ToasterType.ERROR, { autoClose: 2000 });
    }
  };

  return (
    <div className={styles.authFormWrapper}>
      <div className={styles.authFormContainer}>
        <h1>Sign up</h1>
        <form onSubmit={(e) => signup(e)}>
          <InputForm
            placeholder="Enter your username"
            name="userName"
            type="text"
            onChange={handleInputChange}
          />
          <InputForm
            placeholder="Enter your email"
            name="email"
            type="email"
            onChange={handleInputChange}
          />
          <InputForm
            placeholder="Enter your password"
            name="password"
            type="password"
            onChange={handleInputChange}
          />
          <Button onClick={signup} text="SIGN UP" submit />
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
