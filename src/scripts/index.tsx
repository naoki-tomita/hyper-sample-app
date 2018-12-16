import { app, h, View } from "hyperapp";
import { location } from "@hyperapp/router";

import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import {
  Body,
  state as bodyState,
  actions as bodyActions,
} from "./Components/Body";
import { merge } from "./Utils/Merge";
import { actions as globalActions, state as globalState } from "./Global";
import { Loading } from "./Components/Loading";

const state = {
  ...globalState,
  body: bodyState,
};

const actions = {
  ...globalActions,
  body: bodyActions,
};

const view: View<typeof state, typeof actions> = (state, actions) => {
  const body = merge(state.body, actions.body);
  return (
    <div>
      <Header />
      <Body {...body} />
      <Footer />
      {state.isLoading && <Loading />}
    </div>
  );
};

const application = app(state, actions, view, document.body);
location.subscribe(application.location);
