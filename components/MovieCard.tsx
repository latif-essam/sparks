import { StyleSheet } from "react-native";
import React, { useState } from "react";
import { imgPath } from "../constants/api";
import { Card, IconButton } from "react-native-paper";
import { MovieType } from "../constants/types";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import routes from "../constants/routes";
import { useDispatch } from "react-redux";
import { toggleFav } from "../store/moviesSlice";
import { RootStackParamList } from "../navigation/MoviesStackNav";
const MovieCard = ({ movie }: { movie: MovieType }) => {
  const dispatch = useDispatch();
  const {
    title,
    original_language,
    poster_path,
    release_date,
    vote_count,
    liked,
    id,
  } = movie;
  const { navigate } = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <Card
      style={styles.card}
      onPress={() => navigate(routes.movie, { id: movie.id })}
    >
      <Card.Cover source={{ uri: imgPath + "/" + poster_path }} />

      <Card.Title
        title={title}
        subtitle={release_date}
        right={(props) => (
          <IconButton
            {...props}
            icon={liked ? "cards-heart" : "cards-heart-outline"}
            onPress={() => dispatch(toggleFav(movie.id))}
          />
        )}
      />
    </Card>
  );
};

export default MovieCard;

const styles = StyleSheet.create({
  card: {
    margin: 15,
    width: "40%",
  },
});
