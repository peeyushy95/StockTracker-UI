import APIs from './endpoint';

export default {
  "env": process.env.REACT_APP_ENV,
  "backend": {
    "api": APIs,
    "local": {
      "baseUrl": "http://3.14.127.233.xip.io:8000",
    },
  },
}

