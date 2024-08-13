import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { Text } from "react-native-paper";
import ToggleTheme from "../components/ToggleTheme";
import { useSelector } from "react-redux";
import { selectIsDark } from "../store/settingsSlice";

const Settings = () => {
  const isDark = useSelector(selectIsDark);

  return (
    <View
      style={[
        styles.con,
        { backgroundColor: isDark ? "rgba(2,2,2,0.8)" : "white" },
      ]}
    >
      <View style={styles.section}>
        <Text variant="titleMedium">Theme</Text>
        <ToggleTheme />
      </View>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  con: {
    padding: 25,
    flex: 1,
  },
  section: {
    borderBottomColor: "gray",
    backgroundColor: "rgba(13,135,534,0.5)",
    padding: 15,
    borderRadius: 5,
    shadowColor: "gray",
    shadowRadius: 50,
    shadowOffset: { width: 20, height: 25 },
    shadowOpacity: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
