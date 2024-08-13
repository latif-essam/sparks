import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Dropdown } from "react-native-element-dropdown";
import { Icon } from "react-native-paper";
interface FilterMoviesProps {
  setValue: React.Dispatch<React.SetStateAction<string>>;
  value: string;
}
const FilterMovies = ({ setValue, value }: FilterMoviesProps) => {
  const data = [
    { label: "Popularity Asc", value: "popularity.asc" },
    { label: "Popularity Desc", value: "popularity.desc" },
    { label: "Revenue Asc", value: "revenue.asc" },
    { label: "Revenue Desc", value: "revenue.desc" },
    { label: "Vote Average Asc", value: "vote_average.asc" },
    { label: "Vote Average Desc", value: "vote_average.desc" },
  ];
  const [isFocus, setIsFocus] = useState(false);
  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: "blue" }]}>
          Sort By
        </Text>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      {renderLabel()}
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: "black" }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? "Select item" : "..."}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setValue(item.value);
          setIsFocus(false);
        }}
      />
    </View>
  );
};

export default FilterMovies;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    width: "40%",
    padding: 10,
  },
  dropdown: {
    height: 50,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "#f2f2f2",
    left: 40,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 14,
  },
  selectedTextStyle: {
    fontSize: 14,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 14,
  },
});
