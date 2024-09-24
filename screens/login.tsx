// LoginScreen.tsx
import React, { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet, Alert } from "react-native";
import { CommonActions, useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../constants/firebase";
import { setUser, setUserFullname } from "../store/userSlice";
import { useAppSelector } from "../store";
import { ActivityIndicator } from "react-native-paper";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const fullName = useAppSelector((state) => state.user.fullName) as string;
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    // Add your login logic here
    console.log("Email:", email, "Password:", password);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        dispatch(
          setUser({ fullName, email: userCredential.user.email as string })
        );
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: "home" }],
          })
        );
      })
      .catch((e) => console.log({ e }))
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator />}
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title={"Login"} onPress={handleLogin} />
      <Text style={styles.signupText}>
        Don't have an account?{" "}
        <Text
          style={styles.link}
          onPress={() => navigation.navigate("signup" as never)}
        >
          Sign Up
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  signupText: {
    marginTop: 15,
    textAlign: "center",
  },
  link: {
    color: "blue",
    textDecorationLine: "underline",
  },
});

export default Login;
