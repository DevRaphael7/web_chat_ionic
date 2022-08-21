import { createAction, props } from '@ngrx/store';
import { UserInformations } from 'src/app/models/user-informations.model';

export const setUser = createAction('[SET USER]', props<{ payload: UserInformations }>())