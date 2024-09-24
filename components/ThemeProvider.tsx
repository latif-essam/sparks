import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { DefaultTheme, MD3DarkTheme, PaperProvider } from "react-native-paper";
import { useAppSelector } from "../store";
import TabNav from "../navigation/TabNav";
import { StackNav } from "../navigation/StackNav";

// Separate ThemeProvider Component (as shown previously)
export default function ThemeProvider() {
  const isDark = useAppSelector((state) => state.settings.theme.dark);
  return (
    <PaperProvider theme={isDark ? MD3DarkTheme : DefaultTheme}>
      <NavigationContainer>
        {/* set Sack Nav for two stacks(onboarding , and home page) */}
        <StackNav />
      </NavigationContainer>
    </PaperProvider>
  );
}
