import { AppState } from 'store/redux';

const pin = (state: AppState) => state.auth.pin;

export default {
  pin,
};
