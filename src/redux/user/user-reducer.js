import {UserActionTypes} from './user.action.types'

const initState = {
  currentUser: null
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRET_USER:
      return {
        ...state,
        currentUser: action.payload
      };
      break;

    default:
      return state;
      break;
  }
};

export default userReducer;
