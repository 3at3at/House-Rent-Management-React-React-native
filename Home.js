import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, ImageBackground } from "react-native";

const HomeScreen = ({ navigation }) => {
  const handleSearch = () => {
    navigation.navigate("Search");
  };

  return (
    
    <ImageBackground
      source={require("./assets/banner.png")}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={require("./assets/downloadd.png")} style={styles.logo} />
        </View>
        <View style={styles.main}>
          <Text style={styles.title}>Welcome to Rent Housing System</Text>
          <Text style={styles.subtitle}>
            Connecting people with available rental properties
          </Text>
          <TouchableOpacity style={styles.button} onPress={handleSearch}>
            <Text style={styles.buttonText}>Start Searching</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  hamburgerButton: {
    position: "absolute",
    left: 0, 
    padding: 10,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
  main: {
    alignItems: "center",
    marginTop: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#ddd",
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default HomeScreen;
