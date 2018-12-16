import { h, Component } from "hyperapp";
import { State as GlobalState, Actions as GlobalActions } from "../Global";

interface Attributes {}

export const Header: Component<Attributes, GlobalState, GlobalActions> = () => (
  { userInfo },
  { setUserInfo },
) => {
  return (
    <div>
      <div>Hello {userInfo ? `${userInfo.name}!` : "Anonymous!"}</div>
      <button onclick={() => setUserInfo(null)}>logout</button>
    </div>
  );
};
