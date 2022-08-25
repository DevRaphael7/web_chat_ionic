import { Action, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { InterfaceUx } from 'src/app/models/interface-ux.model';
import * as actions from '../actions/interface.action';

const initialState: InterfaceUx = {
  spinner: false
};

const featureReducer = createReducer(
  initialState,
  on(actions.setSpinner, (state, spinner) => ( state = { ...state, spinner: spinner.payload } ))
);

export function interfaceUxReducer(state: InterfaceUx, action: Action) {
  return featureReducer(state, action)
}