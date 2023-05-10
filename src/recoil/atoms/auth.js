import { atom } from 'recoil';

export const userState = atom({
  key: 'userState',
  default: {
    isLoading: true,
    loggedIn: false,
    access_token: null,
    refresh_token: null,
  },
});
