import { StyleSheet, Text, View } from "react-native";
import React from "react";

import MoviesList from "../components/MoviesList";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { selectFavMovies } from "../store/moviesSlice";

const Fav = () => {
  const list = useSelector((state: RootState) => selectFavMovies(state));

  if (!list?.length) return <Text>No Favourites Movies</Text>;
  else if (!list) return <Text>Error</Text>;
  else
    return (
      <View>
        <MoviesList list={list} />
      </View>
    );
};

export default Fav;

const styles = StyleSheet.create({});
