import { axios, api } from 'api';

export function getUsers() {
  return axios.get(api.getUsers);
}
