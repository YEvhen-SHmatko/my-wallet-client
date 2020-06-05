import * as types from '../types';
import INITIAL_STATE from '../initState';

const initReducer = (state = INITIAL_STATE.init, { payload, type }) => {
  switch (type) {
    case types.INIT_KAPUSTA_STARTED:
    case types.INIT_KAPUSTA_FAILURE:
      return state;
    case types.INIT_KAPUSTA_SUCCESS:
      return payload;
    default:
      return state;
  }
};
export default initReducer;
