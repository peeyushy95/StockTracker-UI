import initialState from '../store/initialState';
import {STOCK_DETAIL_ACTION_TYPES} from '../actions/actionTypesInterface';

const stockDetailReducer = (state = initialState.stockInfo, action) => {

  switch (action.type){

    case STOCK_DETAIL_ACTION_TYPES.FETCH_STOCK_DETAIL_SUCCESS: {
      return action.stockInfo.map( (x) => { return {...x, volume: parseInt(x.volume)}});
    }

    case STOCK_DETAIL_ACTION_TYPES.REMOVE_STOCK_DETAIL_DATA: {
      return initialState.stockInfo;
    }

    default:
      return state;
  }
};

export default stockDetailReducer;
