import actions from "./actions";

const initState = { idToken: null };

export default function authReducer(state = initState, action) {
  switch (action.type) {
    case actions.LOGIN_SUCCESS:
      console.log('action in token',action)
      return {
        idToken: action.token
      };
    case actions.LOGOUT:
      return initState;
    default:
      return state;
  }
}
