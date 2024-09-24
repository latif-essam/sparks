import { Alert, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { ActivityIndicator, Button, Text } from "react-native-paper";
import ToggleTheme from "../components/ToggleTheme";
import { useDispatch, useSelector } from "react-redux";
import { selectIsDark } from "../store/settingsSlice";
import { signOut } from "firebase/auth";
import { auth } from "../constants/firebase";
import { logout } from "../store/userSlice";
import { CommonActions, useNavigation } from "@react-navigation/native";
import { useAppSelector } from "../store";

const Settings = () => {
  const isDark = useSelector(selectIsDark);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const user = useAppSelector((state) => state.user);

  const handleLogout = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        // store
        dispatch(logout());

        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: "onboarding" }],
          })
        );
      })
      .catch((e) => Alert.alert(e))
      .finally(() => {
        setLoading(false);
      });
  };
  console.log({ user });
  return (
    <View
      style={[
        styles.con,
        { backgroundColor: isDark ? "rgba(2,2,2,0.8)" : "white" },
      ]}
    >
      {user.isLoggedIn && (
        <>
          <View style={styles.section}>
            <Text variant="titleMedium">Welcome</Text>
            <Text variant="titleMedium">{user.fullName}</Text>
          </View>
          <View style={{ height: 36 }} />
        </>
      )}
      <View style={styles.section}>
        <Text variant="titleMedium">Theme</Text>
        <ToggleTheme />
      </View>
      <View style={{ height: 36 }} />
      <View style={styles.section}>
        <Button onPress={handleLogout} textColor="red">
          Logout
        </Button>
        {loading && <ActivityIndicator />}
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
