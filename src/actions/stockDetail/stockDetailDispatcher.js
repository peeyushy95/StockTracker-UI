import {STOCK_DETAIL_ACTION_TYPES} from './stockDetailActions';
import {STOCK_DETAIL_API} from '../../api/servicesInterface';
import {env, notify} from '../../helpers/helperInterface';
import {beginAjaxCall, endAjaxCall, ajaxCallError} from '../common/ajaxStatusDispatcher';


const fetchStocksDetailSuccess = (stockInfo) => (
  {type: STOCK_DETAIL_ACTION_TYPES.FETCH_STOCK_DETAIL_SUCCESS, stockInfo}
);

export const removeStocksDetail = (stockInfo) => (
  {type: STOCK_DETAIL_ACTION_TYPES.REMOVE_STOCK_DETAIL_DATA}
);

export const fetchStockDetail = (stock) => (
  (dispatch) => {
    dispatch(beginAjaxCall(env.api.stockDetailService));

    return STOCK_DETAIL_API.fetchStockDetail(stock).then(response => {
      dispatch(fetchStocksDetailSuccess(response.data));
      dispatch(endAjaxCall(env.api.stockDetailService));

    }).catch(error =>{
      notify.error(env.api.stockDetailService.errorMsg);
      dispatch(ajaxCallError(env.api.stockDetailService));
    });
  }
);

