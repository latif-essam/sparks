// components/ProtectedRoute.tsx
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { RootState } from "../store";

const ProtectedRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);
  const navigation = useNavigation();

  useEffect(() => {
    if (!isLoggedIn) {
      navigation.navigate("login" as never);
    }
  }, [isLoggedIn, navigation]);

  return isLoggedIn ? children : null;
};

export default ProtectedRoute;
