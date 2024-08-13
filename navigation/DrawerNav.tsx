import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import routes from "../constants/routes";
import Fav from "../screens/fav";
import Settings from "../screens/settings";
import MoviesStackNav from "./MoviesStackNav";

const Drawer = createDrawerNavigator();
const DrawerNav = () => {
  return (
    <Drawer.Navigator initialRouteName={routes.movies}>
      <Drawer.Screen
        options={{ headerTitle: "Movies", drawerLabel: "Movies" }}
        name={routes.moviesStack}
        component={MoviesStackNav}
      />
      <Drawer.Screen
        name={routes.fav}
        component={Fav}
        options={{ headerTitle: "Favourites", drawerLabel: "Favourites" }}
      />
      <Drawer.Screen
        options={{
          headerTitle: "Settings",
          drawerLabel: "Settings",
        }}
        name={routes.settings}
        component={Settings}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNav;

const styles = StyleSheet.create({});
