import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserInformations as State} from 'src/app/models/user-informations.model';

export const selectUser = createFeatureSelector<State>('user');

export const getUser = createSelector(
  selectUser,
  (state: State) => state
);

