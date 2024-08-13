import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import MovieCard from "./MovieCard";
import { MovieType } from "../constants/types";

const MoviesList = ({ list }: { list: MovieType[] }) => {
  return (
    <ScrollView>
      <View style={styles.mContainer}>
        {list?.map((m) => (
          <MovieCard key={m.id} movie={m} />
        ))}
      </View>
    </ScrollView>
  );
};

export default MoviesList;

const styles = StyleSheet.create({
  mContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
