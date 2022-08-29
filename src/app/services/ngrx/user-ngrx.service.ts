import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserInformations } from 'src/app/models/user-informations.model';
import { StoreModel } from 'src/app/Ngrx/state.model';

import * as selectors from '../../Ngrx/selectors/user.selectors';
import * as actions from '../../Ngrx/actions/user.actions';

@Injectable({
  providedIn: 'root'
})
export class UserNgrxService {

  constructor(private store: Store<StoreModel>) { }

  getUser = () => this.store.select(selectors.getUser);

  getUserState(): Promise<UserInformations> {
    return new Promise((resolve, reject) => 
      this.getUser().subscribe(value => {
        resolve(value)
      })
    )
  }

  setUser = (state: UserInformations) => this.store.dispatch(actions.setUser({ payload: state }));

}
