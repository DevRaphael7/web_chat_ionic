import { UserInformations } from 'src/app/models/user-informations.model';
import { Action, createReducer, on } from '@ngrx/store';
import * as actions from '../actions/contact.action';

const initialState: UserInformations[] = [];

const featureReducer = createReducer(
    initialState,
    on(actions.setAllContacts, (state, action) => ( state = action.payload ))
);

export function contactsReducer(state: UserInformations[], action: Action) {
    return featureReducer(state, action)
}