import {shape, number,  array} from 'prop-types';

const ajaxCallStatusType = shape({
  callInfo: array.isRequired,
  numCallsInProgress: number.isRequired,
});



export default {
  ajaxCallStatusType,
};
