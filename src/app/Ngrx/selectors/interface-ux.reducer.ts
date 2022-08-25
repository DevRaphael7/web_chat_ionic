import { createFeatureSelector, createSelector } from '@ngrx/store';
import { InterfaceUx as State } from '../../models/interface-ux.model';

export const selectInterfaceUx = createFeatureSelector<State>('interface');

export const getSpinner = createSelector(
  selectInterfaceUx,
  (state: State) => state.spinner
)