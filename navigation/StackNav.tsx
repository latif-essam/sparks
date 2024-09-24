import { createStackNavigator } from "@react-navigation/stack";
import Onboarding from "../screens/onboarding";
import TabNav from "./TabNav";
import Login from "../screens/login";
import Signup from "../screens/signup";
import ProtectedRoute from "../components/ProtectedRoutes";

const Stack = createStackNavigator();

export function StackNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="onboarding"
        component={Onboarding}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="login"
        options={{ headerShown: false }}
        component={Login}
      />
      <Stack.Screen
        name="signup"
        options={{ headerShown: false }}
        component={Signup}
      />
      <Stack.Screen
        name="home"
        options={{ headerShown: false }}
        component={TabNav}
      />
      {/* <ProtectedRoute>
      </ProtectedRoute> */}
    </Stack.Navigator>
  );
}
