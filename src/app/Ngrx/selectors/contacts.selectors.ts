import { UserInformations as State } from 'src/app/models/user-informations.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectContacts = createFeatureSelector<State[]>('contacts');

export const getAllContacts = createSelector(
  selectContacts,
  (state: State[]) => state
)