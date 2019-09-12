import {AJAX_ACTION_TYPES} from './ajaxStatusActions';

export const beginAjaxCall = (api) => (
   {type: AJAX_ACTION_TYPES.BEGIN_AJAX_CALL, api}
);

export const endAjaxCall = (api) => (
   {type: AJAX_ACTION_TYPES.END_AJAX_CALL, api}
);

export const ajaxCallError = (api) => (
   {type: AJAX_ACTION_TYPES.AJAX_CALL_ERROR, api}
);
