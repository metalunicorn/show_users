import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromAuth from '../auth/store/auth.reducer';


export interface State {
  auth: typeof fromAuth.initialState;
}

export const reducers: ActionReducerMap<State> = {
  auth: fromAuth.authReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
