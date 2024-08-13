import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import routes from "../constants/routes";
import Movies from "../screens/movies";
import Movie from "../screens/MovieDetails";
import MovieDetails from "../screens/MovieDetails";

export type RootStackParamList = {
  movies: undefined;
  movie: { id: number };
  // Add other routes here
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const MoviesStackNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={routes.movies as keyof RootStackParamList}
        component={Movies}
      />
      <Stack.Screen
        name={routes.movie as keyof RootStackParamList}
        options={{ headerTitle: "" }}
        component={MovieDetails}
      />
    </Stack.Navigator>
  );
};

export default MoviesStackNav;

const styles = StyleSheet.create({});
