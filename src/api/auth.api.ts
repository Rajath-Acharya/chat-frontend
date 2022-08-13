/* eslint-disable import/prefer-default-export */
import axios from 'axios';

import { LoginPayload, RegisterPayload } from '../helpers/auth.types';

const baseAPI = import.meta.env.VITE_BASE_API;

const register = async (payload: RegisterPayload) => {
  const api = `${baseAPI}register`;
  const res = await axios.post(api, payload);
  return res;
};

const login = async (payload: LoginPayload) => {
  const api = `${baseAPI}login`;
  const res = await axios.post(api, payload);
  return res;
};

export { login, register };
