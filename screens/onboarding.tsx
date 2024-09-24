import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { Button } from "react-native-paper";
import { CommonActions, useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const Onboarding = () => {
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);
  const navigation = useNavigation();

  useEffect(() => {
    if (isLoggedIn) {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: "home" }],
        })
      );
    }
  }, [isLoggedIn, navigation]);
  return (
    <ImageBackground
      style={styles.bg}
      source={require("./../assets/onboarding.jpg")}
      blurRadius={1}
    >
      <View style={styles.main}>
        <Text style={styles.title}>Sparks</Text>
        <Text style={styles.info}>Where every show, gives a shock!</Text>
        <Pressable
          style={styles.btn}
          onPress={() => navigation.navigate("login" as never)}
        >
          <Text style={styles.btnText}>Let's Go</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "dodgerblue",
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 2,
  },
  btnText: {
    color: "white",
    fontSize: 15,
  },
  bg: {
    width: "100%",
    height: "100%",
  },
  main: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  title: {
    fontSize: 36,
    color: "white",
    paddingVertical: 10,
    paddingHorizontal: 50,
    backgroundColor: "rgba(200,215,200,0.3)",
    textShadowColor: "white",
    borderRadius: 2,
    textShadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.29,
    textShadowRadius: 4.65,

    elevation: 7,
  },
  info: {
    fontSize: 20,
    color: "white",
    backgroundColor: "rgba(20,20,20,0.5)",
    padding: 5,
  },
});
