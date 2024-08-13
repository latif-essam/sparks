import { AppRegistry } from "react-native";
import { Provider } from "react-redux";
import { persistor, store } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { name as appName } from "./app.json";
import ThemeProvider from "./components/ThemeProvider";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider />
      </PersistGate>
    </Provider>
  );
}
AppRegistry.registerComponent(appName, () => App);
