import {AJAX_ACTION_TYPES} from '../actions/actionTypesInterface';
import initialState from '../store/initialState';

const ajaxStatusReducer = (state = initialState.ajaxCallStatus, action) => {

  if(action.type === AJAX_ACTION_TYPES.BEGIN_AJAX_CALL) {

    return { ...state,
      callsInProgress: state.callsInProgress + 1,
      callInfo: [...state.callInfo,{id: action.api.identifier, msg: action.api.loadMsg}]
    };

  } else if(action.type === AJAX_ACTION_TYPES.AJAX_CALL_ERROR || action.type === AJAX_ACTION_TYPES.END_AJAX_CALL){
    return { ...state,
      callsInProgress: state.callsInProgress - 1,
      callInfo: state.callInfo.filter( calls =>  calls.id !== action.api.identifier)
    };
  }

  return state;
};

export default ajaxStatusReducer;
