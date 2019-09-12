import {env} from '../../helpers/helperInterface';
import axiosInstance from '../config/axiosConfiguration';

const DASHBOARD_API = Object.create(null);

DASHBOARD_API.fetchStocksList = () => {

  const options = {
    method: 'GET',
    url: env.api.stockListService.endpoint,
  };

  return axiosInstance(options);
};

DASHBOARD_API.fetchBullStocksList = () => {

  const options = {
    method: 'GET',
    url: env.api.bullStockService.endpoint,
  };

  return axiosInstance(options);
};


DASHBOARD_API.fetchMarketTrend = () => {

  const options = {
    method: 'GET',
    url: env.api.marketTrendsService.endpoint,
  };
  return axiosInstance(options);
};


export default DASHBOARD_API;
