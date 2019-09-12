import {DASHBOARD_ACTION_TYPES} from './dashboardActions';
import {DASHBOARD_API} from '../../api/servicesInterface';
import {env, notify} from '../../helpers/helperInterface';
import {beginAjaxCall, endAjaxCall, ajaxCallError} from '../common/ajaxStatusDispatcher';


const fetchStocksListSuccess = (stocksList) => (
  {type: DASHBOARD_ACTION_TYPES.FETCH_STOCKLIST_SUCCESS, stocksList}
);

const fetchBullStocksListSuccess = (stocksList) => (
  {type: DASHBOARD_ACTION_TYPES.FETCH_STOCKS_ABOVE_EMA_SUCCESS, stocksList}
);


const fetchMarketTrendsSuccess = (trend) => (
  {type: DASHBOARD_ACTION_TYPES.FETCH_MARKET_TRENDS_SUCCESS, trend}
);

export const fetchStocksList = () => (
  (dispatch) => {
    dispatch(beginAjaxCall(env.api.stockListService));

    return DASHBOARD_API.fetchBullStocksList().then(response => {
      dispatch(fetchStocksListSuccess(response.data));
      dispatch(endAjaxCall(env.api.stockListService));

    }).catch(error =>{
      notify.error(env.api.stockListService.errorMsg);
      dispatch(ajaxCallError(env.api.stockListService));
    });
  }
);


export const fetchBullStocksList = () => (
  (dispatch) => {
    dispatch(beginAjaxCall(env.api.bullStockService));
    return DASHBOARD_API.fetchBullStocksList().then(response => {
      dispatch(fetchBullStocksListSuccess(response.data));
      dispatch(endAjaxCall(env.api.bullStockService));
    }).catch(error =>{
      notify.error(env.api.bullStockService.errorMsg);
      dispatch(ajaxCallError(env.api.bullStockService));
    });
  }
);


export const fetchMarketTrend = () => (
  (dispatch) => {
    dispatch(beginAjaxCall(env.api.marketTrendsService));

    return DASHBOARD_API.fetchMarketTrend().then(response => {
      dispatch(fetchMarketTrendsSuccess(response.data));
      dispatch(endAjaxCall(env.api.marketTrendsService));

    }).catch(error =>{
      notify.error(env.api.marketTrendsService.errorMsg);
      dispatch(ajaxCallError(env.api.marketTrendsService));
    });
  }
);
