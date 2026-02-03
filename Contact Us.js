import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  Pressable,
  Alert,
  ScrollView,
} from "react-native";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (name && email && message) {
      Alert.alert("Thank you for your message!");
      setName("");
      setEmail("");
      setMessage("");
    } else {
      Alert.alert("Please fill out all fields.");
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require("./assets/downloadd.png")} style={styles.logo} />
      <ScrollView contentContainerStyle={styles.main}>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Your Name"
            placeholderTextColor="#aaa"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder="Your Email"
            placeholderTextColor="#aaa"
            value={email}
            keyboardType="email-address"
            onChangeText={setEmail}
          />
          <TextInput
            style={[styles.input, styles.textarea]}
            placeholder="Your Message"
            placeholderTextColor="#aaa"
            value={message}
            multiline
            numberOfLines={4}
            onChangeText={setMessage}
          />
          <Pressable style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Send Message</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212", 
  },
  logo: {
    width: 180,
    height: 180,
    resizeMode: "contain",
    alignSelf: "center",
    marginVertical: 20, 
  },
  main: {
    paddingHorizontal: 20,
    alignItems: "center",
  },
  form: {
    width: "100%",
    maxWidth: 800,
  },
  input: {
    backgroundColor: "#1f1f1f", 
    color: "#e0e0e0", 
    padding: 12,
    marginVertical: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#333", 
  },
  textarea: {
    height: 100,
    textAlignVertical: "top",
  },
  button: {
    backgroundColor: "#005e6e",
    paddingVertical: 12,
    alignItems: "center",
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff", 
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Contact;
