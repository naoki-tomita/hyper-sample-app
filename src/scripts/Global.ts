import { ActionType } from "hyperapp";
import { location } from "@hyperapp/router";

export interface Actions {
  setUserInfo: ActionType<State, Actions>;
  setLoading: ActionType<State, Actions>;
  location: typeof location.actions;
}

export interface State {
  userInfo: UserInfo | null;
  isLoading: boolean;
  location: typeof location.state;
}

export interface UserInfo {
  id: string;
  name: string;
  age: number;
  from: string;
}

export const actions: Actions = {
  setUserInfo: (userInfo: UserInfo) => (_, { location }) => (
    location.go("/app"), { userInfo }
  ),
  setLoading: isLoading => ({ isLoading }),
  location: location.actions,
};

export const state: State = {
  userInfo: null,
  isLoading: false,
  location: location.state,
};
