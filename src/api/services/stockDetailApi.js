import {env} from '../../helpers/helperInterface';
import axiosInstance from '../config/axiosConfiguration';

const STOCK_DETAIL_API = Object.create(null);

STOCK_DETAIL_API.fetchStockDetail = (stock) => {

  const options = {
    method: 'GET',
    url: env.api.stockDetailService.endpoint + stock,
  };

  return axiosInstance(options);
};

export default STOCK_DETAIL_API;
