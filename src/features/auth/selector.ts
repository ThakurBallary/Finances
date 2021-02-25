import { AppState } from 'store/redux';

const token = (state: AppState) => state.auth.token;

export default {
  token,
};
