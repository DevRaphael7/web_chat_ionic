import { ActionReducer } from "@ngrx/store";
import { localStorageSync } from "ngrx-store-localstorage";
import { StoreModel as AppState } from './state.model';

export function localStorageSyncReducer(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
  return localStorageSync({
    keys: ['user', 'contacts'],
    rehydrate: true,
  })(reducer);
}