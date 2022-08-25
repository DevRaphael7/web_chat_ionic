import { InterfaceUx } from "../models/interface-ux.model";
import { UserInformations } from "../models/user-informations.model";
import { interfaceUxReducer } from "./reducers/interface-ux.reducer";
import { userReducer } from "./reducers/user.reducer";

export interface StoreModel {
  user: UserInformations;
  interface: InterfaceUx;
}

export const reduxState = {
  user: userReducer,
  interface: interfaceUxReducer
}
