import { User } from '../user.model';
import { createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';
import { AUTHENTICATE_FAIL, AUTHENTICATE_SUCCESS, CLEAR_ERROR, LOGIN_START, LOGOUT, SIGNUP_START, State } from './auth.types';


export const initialState: State = {
  user: null,
  authError: null,
  loading: false
};


export const authReducer = createReducer(
  initialState,
  on(AuthActions.authenticateSuccess, (state, payload) => {
      const user = new User(
        payload.email,
        payload.userId,
        payload.token,
        payload.expirationDate
      );
      return {
        ...state,
        authError: null,
        user: user,
        loading: false
      };
  })
)



// : State {
//   switch (action.type) {
//     case AUTHENTICATE_SUCCESS:
//       const user = new User(
//         action.payload.email,
//         action.payload.userId,
//         action.payload.token,
//         action.payload.expirationDate
//       );
//       return {
//         ...state,
//         authError: null,
//         user: user,
//         loading: false
//       };
//     case LOGOUT:
//       return {
//         ...state,
//         user: null
//       };
//     case LOGIN_START:
//     case SIGNUP_START:
//       return {
//         ...state,
//         authError: null,
//         loading: true
//       };
//     case AUTHENTICATE_FAIL:
//       return {
//         ...state,
//         user: null,
//         authError: action.payload,
//         loading: false
//       };
//     case CLEAR_ERROR:
//       return {
//         ...state,
//         authError: null
//       };
//     default:
//       return state;
//   }
// }
