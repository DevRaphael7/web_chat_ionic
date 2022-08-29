import { createAction, props } from '@ngrx/store';
import { UserInformations } from 'src/app/models/user-informations.model';

export const setAllContacts = createAction('[SET ALL CONTACTS]', props<{ payload: UserInformations[] }>())