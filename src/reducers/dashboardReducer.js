import initialState from '../store/initialState';
import {DASHBOARD_ACTION_TYPES} from '../actions/actionTypesInterface';

const dashboardReducer = (state = initialState.stocksList, action) => {

  switch (action.type){

    case DASHBOARD_ACTION_TYPES.FETCH_STOCKS_ABOVE_EMA_SUCCESS: {
      return {...state, bullStocks: action.stocksList.map((x) => { return {...x, volume: parseInt(x.volume, 10)};})};
    }

    case DASHBOARD_ACTION_TYPES.FETCH_MARKET_TRENDS_SUCCESS: {
      return {...state, marketTrend: action.trend.map((x) => { return {...x, ratio: parseFloat(Number.parseFloat(x.ratio).toFixed(4))}})};
    }

    case DASHBOARD_ACTION_TYPES.FETCH_STOCKLIST_SUCCESS: {
      return {...state, stockNames:action.stocksList.map((x) => { return {...x}}).filter(x => x.flag === 5).map((x) => {return x.symbol}).sort() };
    }
    default:
      return state;
  }
};

export default dashboardReducer;
