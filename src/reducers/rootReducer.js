import {combineReducers} from 'redux';
import stocksList from './dashboardReducer';
import stockInfo from './stockDetailReducer';
import ajaxCallStatus from './ajaxStatusReducer';


const rootReducer = combineReducers({
  stocksList,
  stockInfo,
  ajaxCallStatus,
});

export default rootReducer;
