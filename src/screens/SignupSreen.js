import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { signUp } from "./src/config/auth";

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    const user = await signUp(email, password);
    if (user) {
      console.log("Signup Successful:", user.email);
      // Navigate to Login screen
      navigation.navigate("Login");
    } else {
      alert("Signup failed. Try again.");
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Sign Up</Text>
      <TextInput placeholder="Email" onChangeText={setEmail} value={email} />
      <TextInput
        placeholder="Password"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      />
      <Button title="Sign Up" onPress={handleSignup} />
      <Button title="Go to Login" onPress={() => navigation.navigate("Login")} />
    </View>
  );
};

export default SignupScreen;