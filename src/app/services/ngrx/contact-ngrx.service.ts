import { UserInformations } from 'src/app/models/user-informations.model';
import { Injectable } from '@angular/core';
import { StoreModel } from 'src/app/Ngrx/state.model';
import { Store } from '@ngrx/store';

import * as selectors from '../../Ngrx/selectors/contacts.selectors';
import * as actions from '../../Ngrx/actions/contact.action';

@Injectable({
  providedIn: 'root'
})
export class ContactNgrxService {

  constructor(private store: Store<StoreModel>) { }

  getAllContacts = () => this.store.select(selectors.getAllContacts)

  setContacts = (state: UserInformations[]) => this.store.dispatch(actions.setAllContacts({ payload: state }))
  
  getContactsState(): Promise<UserInformations[]> {
    return new Promise((resolve) => {
      this.getAllContacts().subscribe(value => {
        resolve(value)
      })
    })
  }
}
