import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useMemo, useState } from "react";
import { ActivityIndicator, Badge, Searchbar } from "react-native-paper";
import { MovieType } from "../constants/types";

import MoviesList from "../components/MoviesList";
import { useDispatch, useSelector } from "react-redux";
import { RootState, useAppDispatch, useAppSelector } from "../store";
import { clearMovies, fetchMovies } from "../store/moviesSlice";
import FilterMovies from "../components/FilterMovies";

const Movies = () => {
  const { error, list, status } = useAppSelector(
    (state: RootState) => state.movies
  );
  const [search, setSearch] = useState("");
  const [value, setValue] = useState<string>("popularity.desc");
  const [filteredList, setFilteredList] = useState<MovieType[]>(list);
  const disptach = useAppDispatch();
  useEffect(() => {
    // disptach(clearMovies());
    disptach(fetchMovies({ sort_by: value as string }));
    setFilteredList(list);
  }, [disptach, value]);
  // handle search
  useMemo(() => {
    const newList = list.filter((m) =>
      m.original_title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredList(newList);
  }, [list, search]);

  if (status === "failed") return <Text>{error}</Text>;
  else if (status === "loading") return <ActivityIndicator size={50} />;
  else if (status === "succeeded")
    return (
      <View>
        <View style={styles.filter}>
          <Searchbar
            style={styles.search}
            placeholder="Search by movie name"
            value={search}
            onChangeText={setSearch}
          />
          <FilterMovies value={value as string} setValue={setValue} />
        </View>
        <Badge style={styles.badge}>{filteredList.length}</Badge>
        <MoviesList list={filteredList as MovieType[]} />
      </View>
    );
};

export default Movies;

const styles = StyleSheet.create({
  filter: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 5,
  },
  search: {
    width: "60%",
    backgroundColor: "transparent",
    borderWidth: 1,
    fontSize: 12,
    height: 60,
  },
  badge: {
    fontSize: 16,
    padding: 5,
    width: 32,
    height: 32,
    borderRadius: 50,
    backgroundColor: "dodgerblue",
    alignSelf: "flex-start",
    marginLeft: 15,
  },
});
