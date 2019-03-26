import "./config/reactotron";
import "./config/StatusbarConfig";
import React from "react";
import { Provider } from "react-redux";

import store from "./store";

import Routes from "./routes";

import { View, Text } from "react-native";

// import styles from './styles';

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
