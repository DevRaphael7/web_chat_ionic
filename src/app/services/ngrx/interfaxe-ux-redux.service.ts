import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { StoreModel } from 'src/app/Ngrx/state.model';

import * as selectors from '../../Ngrx/selectors/interface-ux.reducer';
import * as actions from '../../Ngrx/actions/interface.action';
import { InterfaceUx } from 'src/app/models/interface-ux.model';

@Injectable({
  providedIn: 'root'
})
export class InterfaxeUxReduxService {

  constructor(private store: Store<StoreModel>) { }

  getSpinnerState = () => this.store.select(selectors.getSpinner);

  setSpinner = (state: boolean) => this.store.dispatch(actions.setSpinner({ payload: state }));
}
