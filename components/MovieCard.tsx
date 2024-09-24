import { Alert, StyleSheet } from "react-native";
import React, { useState } from "react";
import { imgPath } from "../constants/api";
import { Card, IconButton } from "react-native-paper";
import { MovieType } from "../constants/types";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import routes from "../constants/routes";
import { useDispatch } from "react-redux";
import { toggleFav } from "../store/moviesSlice";
import { RootStackParamList } from "../navigation/MoviesStackNav";
import { addFavMovieFS, removeFavMovieFS } from "../constants/firestoreApis";
const MovieCard = ({ movie }: { movie: MovieType }) => {
  const dispatch = useDispatch();
  const { title, poster_path, release_date, liked } = movie;
  const { navigate } = useNavigation<NavigationProp<RootStackParamList>>();
  const [loading, setLoading] = useState(false);
  const handleAddFav = async () => {
    setLoading(true);
    try {
      dispatch(toggleFav(movie.id));
      if (movie.liked) {
        removeFavMovieFS(movie.fsId as string);
      } else {
        addFavMovieFS(movie);
      }
    } catch (error) {
      Alert.alert("error add fav ff");
    } finally {
      setLoading(false);
    }
  };
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
            onPress={handleAddFav}
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
