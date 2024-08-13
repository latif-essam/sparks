import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Switch } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { RootState, useAppDispatch, useAppSelector } from "../store";
import { selectIsDark, toggleTheme } from "../store/settingsSlice";

const ToggleTheme = () => {
  const dispatch = useAppDispatch();
  const isDark = useSelector(selectIsDark);

  const handleToggle = () => {
    dispatch(toggleTheme());
  };
  return <Switch value={isDark} color="black" onValueChange={handleToggle} />;
};

export default ToggleTheme;

const styles = StyleSheet.create({});
