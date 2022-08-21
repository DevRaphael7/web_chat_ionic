import { UserInformations } from "../models/user-informations.model";
import { userReducer } from "./reducers/user.reducer";

export interface StoreModel {
  user: UserInformations;
}

export const reduxState = {
  user: userReducer
}
