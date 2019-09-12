import {URL_CONSTANTS} from '../config/configInterface';

const getEnvInformation = {
  envName : URL_CONSTANTS.env,
  api : URL_CONSTANTS.backend.api,
  env : URL_CONSTANTS.backend[URL_CONSTANTS.env]
};

export default getEnvInformation;
