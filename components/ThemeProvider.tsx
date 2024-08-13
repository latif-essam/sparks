import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { DefaultTheme, MD3DarkTheme, PaperProvider } from "react-native-paper";
import { useAppSelector } from "../store";
import TabNav from "../navigation/TabNav";

// Separate ThemeProvider Component (as shown previously)
export default function ThemeProvider() {
  const isDark = useAppSelector((state) => state.settings.theme.dark);
  return (
    <PaperProvider theme={isDark ? MD3DarkTheme : DefaultTheme}>
      <NavigationContainer>
        <TabNav />
      </NavigationContainer>
    </PaperProvider>
  );
}
