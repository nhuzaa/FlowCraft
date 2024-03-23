import axios from 'axios';

import {config }from '../config';

/**
 * Http Utility.
 */
const http = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});



export default http;



