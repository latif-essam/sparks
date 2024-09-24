// SignupScreen.tsx
import React, { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { validateEmail, validatePasswordStrength } from "../utils/validation";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../constants/firebase";
import { useDispatch } from "react-redux";
import { setUser, setUserFullname } from "../store/userSlice";

const SignupScreen = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("");
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleSignup = () => {
    if (
      !fullName ||
      !validateEmail(email) ||
      !validatePasswordStrength(password)
    ) {
      Alert.alert("Validation Error", "Please fill in all fields correctly.");
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match.");
      return;
    }
    // Add your signup logic here
    console.log("Full Name:", fullName, "Email:", email, "Password:", password);
    createUserWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        console.log(`user signedup `, userCredential);
        const user = userCredential.user;
        console.log({ user });
        //todo: pass data throught navigation
        dispatch(setUserFullname({ fullName }));
        navigation.navigate("login" as never);
      }
    );
  };

  const handlePasswordChange = (newPassword: string) => {
    setPassword(newPassword);
    if (validatePasswordStrength(newPassword)) {
      setPasswordStrength("Strong");
    } else {
      setPasswordStrength("Weak");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={fullName}
        onChangeText={setFullName}
      />
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
        onChangeText={handlePasswordChange}
        secureTextEntry
      />
      <Text
        style={[
          styles.strengthText,
          { color: passwordStrength === "Strong" ? "green" : "red" },
        ]}
      >
        {passwordStrength}
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      <Button title="Sign Up" onPress={handleSignup} />
      <Text style={styles.loginText}>
        Already have an account?{" "}
        <Text
          style={styles.link}
          onPress={() => navigation.navigate("login" as never)}
        >
          Login
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
    backgroundColor: "#f5f5f5", // Light background color
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  strengthText: {
    textAlign: "center",
    color: "red", // Change color based on strength
    marginBottom: 10,
  },
  loginText: {
    marginTop: 15,
    textAlign: "center",
  },
  link: {
    color: "blue",
    textDecorationLine: "underline",
  },
});

export default SignupScreen;
