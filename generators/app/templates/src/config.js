import qs from 'qs';
import { DEV, TEST, PROD } from './constants/env';

const config = {
  [DEV]: {
    API: '/api',
  },
  [TEST]: {
    API: 'http://localhost/api',
  },
  [PROD]: {
    API: '/api',
  },
};

const hash = qs.parse(window.location.hash.substr(window.location.hash.indexOf('?') + 1));

export default config[hash.env || PROD];
