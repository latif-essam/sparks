import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

import MoviesList from "../components/MoviesList";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { selectFavMovies, toggleFav } from "../store/moviesSlice";
import { Button } from "react-native-paper";
import {
  deleteFavMoviesCollection,
  getFavMoviesFS,
} from "../constants/firestoreApis";
import { MovieType } from "../constants/types";

const Fav = () => {
  const favList = useSelector((state: RootState) => selectFavMovies(state));
  const [list, setList] = useState<MovieType[]>([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const movies = await getFavMoviesFS();
        setList(movies);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [favList, list.length]);

  const handleDelete = async () => {
    try {
      await deleteFavMoviesCollection();
      alert("All favorite movies deleted successfully!");
    } catch (error) {
      console.error("Error deleting fav_movies collection: ", error);
    } finally {
      favList.map((m) => dispatch(toggleFav(m.id)));
    }
  };

  console.log({ list: list.length, favList: favList.length });
  if (!list?.length && loading === false)
    return <Text>No Favourites Movies</Text>;
  else if (!list) return <Text>Error</Text>;
  else
    return (
      <View>
        <Button onPress={handleDelete}>Delete All Fav Movies </Button>
        <MoviesList list={list} />
      </View>
    );
};

export default Fav;

const styles = StyleSheet.create({});
