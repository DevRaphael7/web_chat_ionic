import { Action, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { UserInformations } from 'src/app/models/user-informations.model';
import * as actions from '../actions/user.actions';

const initialState: UserInformations = {
  nome: null,
  numero: null,
  avatar: null
}

const featureReducer = createReducer(
  initialState,
  on(actions.setUser, (state, action) => ( state = action.payload ))
);

export function userReducer(state: UserInformations, action: Action) {
  return featureReducer(state, action)
}
