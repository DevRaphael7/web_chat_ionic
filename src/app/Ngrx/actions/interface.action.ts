import { createAction, props } from '@ngrx/store';
import { InterfaceUx } from 'src/app/models/interface-ux.model';

export const setSpinner = createAction('[SET SPINNER]', props<{ payload: boolean }>());