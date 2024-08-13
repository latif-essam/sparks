import { StyleSheet, View } from "react-native";
import React from "react";

import { imgPath } from "../constants/api";
import { Text, Card, IconButton } from "react-native-paper";
import { useRoute } from "@react-navigation/native";
import { MovieType } from "../constants/types";
import { useDispatch, useSelector } from "react-redux";
import { selectMovieById, toggleFav } from "../store/moviesSlice";
import { RootState } from "../store";
const MovieDetails = () => {
  const dispatch = useDispatch();
  const { id } = useRoute().params as { id: number };

  const movie = useSelector((state: RootState) =>
    selectMovieById(state, id)
  ) as MovieType;
  const { title, poster_path, overview, liked } = movie;
  if (!movie)
    return (
      <Text variant="headlineSmall">Error Gettting movie, Refersh app</Text>
    );
  else
    return (
      <Card style={styles.card}>
        <Card.Cover
          style={styles.img}
          source={{ uri: imgPath + "/" + poster_path }}
        />
        <Card.Title
          title={title}
          right={(props) => (
            <IconButton
              {...props}
              icon={liked ? "cards-heart" : "cards-heart-outline"}
              onPress={() => dispatch(toggleFav(id))}
            />
          )}
        />
        <Card.Content>
          <Text variant="titleMedium">Description</Text>
          <Text variant="bodyMedium">
            {overview.slice(0, 300)}
            {overview.length > 300 ? "..." : ""}
          </Text>
        </Card.Content>
      </Card>
    );
};

export default MovieDetails;

const styles = StyleSheet.create({
  card: {
    margin: 15,
    height: "95%",
  },
  img: {
    height: "65%",
  },
});
