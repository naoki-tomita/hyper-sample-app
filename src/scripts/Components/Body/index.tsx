import { h, Component } from "hyperapp";
import { Route, Redirect } from "@hyperapp/router";
import {
  Auth,
  actions as authActions,
  state as authState,
  Actions as AuthActions,
  State as AuthState,
} from "./Auth";
import { State as GlobalState, UserInfo } from "../../Global";

export interface Attributes {}

export interface State {
  auth: AuthState;
}

export interface Actions {
  auth: AuthActions;
}

export const state: State = {
  auth: authState,
};

export const actions: Actions = {
  auth: authActions,
};

export const Body: Component<Attributes & State & Actions, GlobalState> = ({
  auth,
}) => ({ userInfo, location }) => {
  if (!userInfo && location.pathname !== "/auth") {
    return <Redirect to="/auth" />;
  }
  return (
    <div>
      <Route
        path="/auth"
        render={() => <Auth {...auth} onLoginSuccess={() => ({})} />}
      />
      <Route
        path="/app"
        render={() => (userInfo && <UserData userInfo={userInfo} />) || <div />}
      />
    </div>
  );
};

const UserData: Component<{ userInfo?: UserInfo }> = ({ userInfo }) => {
  return (
    <div>
      {userInfo ? (
        <div>
          <div>name: {userInfo.name}</div>
          <div>id: {userInfo.id}</div>
          <div>age: {userInfo.age}</div>
          <div>from: {userInfo.from}</div>
        </div>
      ) : (
        <div>error</div>
      )}
    </div>
  );
};
