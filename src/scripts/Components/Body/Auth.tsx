import { h, Component, ActionType } from "hyperapp";
import { login, register } from "../../Api/Auth";
import {
  Actions as GlobalActions,
  State as GlobalState,
  UserInfo,
} from "../../Global";

export interface Attributes {
  onLoginSuccess: () => void;
}

export interface State {
  id: string;
  password: string;
  showError: boolean;
}

export const state: State = {
  id: "",
  password: "",
  showError: false,
};

export interface Actions {
  setId: ActionType<State, Actions>;
  setPassword: ActionType<State, Actions>;
  execLogin: ActionType<State, Actions>;
  execRegister: ActionType<State, Actions>;
  loginSuccess: ActionType<State, Actions>;
  loginFailure: ActionType<State, Actions>;
}

export const actions: Actions = {
  setId: (id: string) => ({ id }),
  setPassword: (password: string) => ({ password }),
  execLogin: ({ callOnLoginSuccess, callOnLoginFailure }) => async (
    { id, password },
    { loginSuccess, loginFailure },
  ) => {
    const userInfo = await login(id, password);
    return (
      (userInfo && loginSuccess({ userInfo, callOnLoginSuccess })) ||
      loginFailure({ callOnLoginFailure })
    );
  },
  execRegister: ({ callOnLoginSuccess }) => async (
    { id, password },
    { loginSuccess },
  ) => {
    const userInfo = await register(id, password);
    loginSuccess({ userInfo, callOnLoginSuccess });
  },
  loginSuccess: ({ callOnLoginSuccess, userInfo }) => (
    callOnLoginSuccess && callOnLoginSuccess(userInfo), { showError: false }
  ),
  loginFailure: ({ callOnLoginFailure }) => (
    callOnLoginFailure && callOnLoginFailure(), { showError: true }
  ),
};

export const Auth: Component<
  Attributes & State & Actions,
  GlobalState,
  GlobalActions
> = ({
  setId,
  setPassword,
  onLoginSuccess,
  execLogin,
  execRegister,
  showError,
  id,
  password,
}) => (_, { setUserInfo, setLoading }) => {
  function onIdChange(e: Event) {
    setId((e.target as HTMLInputElement).value);
  }

  function onPasswordChange(e: Event) {
    setPassword((e.target as HTMLInputElement).value);
  }

  function callOnLoginSuccess(userInfo: UserInfo) {
    setUserInfo(userInfo);
    setLoading(false);
    onLoginSuccess();
  }

  function callOnLoginFailure() {
    setLoading(false);
  }

  return (
    <div>
      {showError && <div>login failed.</div>}
      <div>
        id: <input oninput={onIdChange} value={id} type="text" />
      </div>
      <div>
        password:{" "}
        <input oninput={onPasswordChange} value={password} type="password" />
      </div>
      <div>
        <button
          onclick={() => (
            setLoading(true),
            execLogin({ callOnLoginSuccess, callOnLoginFailure })
          )}
        >
          login
        </button>
        <button
          onclick={() => (
            setLoading(true),
            execRegister({ callOnLoginSuccess, callOnLoginFailure })
          )}
        >
          register
        </button>
      </div>
    </div>
  );
};
