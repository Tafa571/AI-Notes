import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { signIn } from "./src/config/auth";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const user = await signIn(email, password);
    if (user) {
      console.log("Login Successful:", user.email);
      // Navigate to Home screen or Dashboard
    } else {
      alert("Login failed. Check your credentials.");
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Login</Text>
      <TextInput placeholder="Email" onChangeText={setEmail} value={email} />
      <TextInput
        placeholder="Password"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Sign Up" onPress={() => navigation.navigate("Signup")} />
    </View>
  );
};

export default LoginScreen;