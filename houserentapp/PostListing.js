import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert, ScrollView, Image, TouchableOpacity } from "react-native";
import * as ImagePicker from 'expo-image-picker'; 
import { useNavigation } from '@react-navigation/native';
 
const PostListing = ({ onAddListing, listings }) => {
  const navigation = useNavigation();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [type, setType] = useState("");
  const [images, setImages] = useState([]);
 
  const handleImageUpload = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      quality: 1,
    });
 
    if (!result.canceled) {
      const imageUris = result.assets.map((asset) => asset.uri);
      setImages((prevImages) => [...prevImages, ...imageUris]);
    }
  };
 
  const handleSubmit = () => {
    if (
      !title ||
      !description ||
      !location ||
      !price ||
      !bedrooms ||
      !type ||
      images.length === 0
    ) {
      Alert.alert("Please fill out all fields and upload at least one image.");
      return;
    }
 
    const newListing = {
      id: listings.length + 1,
      images,
      price,
      location,
      bedrooms: parseInt(bedrooms, 10),
      type,
      description,
      contact: "landlordMUN@example.com",
    };
 
    onAddListing(newListing);
 
    setTitle("");
    setDescription("");
    setLocation("");
    setPrice("");
    setBedrooms("");
    setType("");
    setImages([]);
    Alert.alert("Listing successfully added!");
 
    navigation.navigate('Search');  
  };
 
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require("./assets/downloadd.png")} style={styles.logo} />
      <Text style={styles.heading}>Post a Listing</Text>
 
      <TextInput
        style={styles.input}
        placeholder="Title"
        placeholderTextColor="#aaa"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={[styles.input, styles.textarea]}
        placeholder="Description"
        placeholderTextColor="#aaa"
        value={description}
        multiline
        numberOfLines={4}
        onChangeText={setDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Location"
        placeholderTextColor="#aaa"
        value={location}
        onChangeText={setLocation}
      />
      <TextInput
        style={styles.input}
        placeholder="Price (e.g., $1200/month)"
        placeholderTextColor="#aaa"
        value={price}
        onChangeText={setPrice}
      />
      <TextInput
        style={styles.input}
        placeholder="Bedrooms"
        placeholderTextColor="#aaa"
        value={bedrooms}
        keyboardType="numeric"
        onChangeText={setBedrooms}
      />
      <TextInput
        style={styles.input}
        placeholder="Property Type"
        placeholderTextColor="#aaa"
        value={type}
        onChangeText={setType}
      />
     
      <TouchableOpacity style={styles.imageButton} onPress={handleImageUpload}>
        <Text style={styles.buttonText}>Select Images</Text>
      </TouchableOpacity>
 
      <View style={styles.imagePreview}>
        {images.map((uri, index) => (
          <Image key={index} source={{uri}} style={styles.imagePreviewItem} />
        ))}
      </View>
 
      <Button title="Submit Listing" onPress={handleSubmit} color="#007BFF" />
    </ScrollView>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#1c1c1c",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  logo: {
    width: 180,
    height: 180,
    resizeMode: "contain",
    marginVertical: 10,
  },
  heading: {
    fontSize: 32,
    color: "#007BFF",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    backgroundColor: "#2a2a2a",
    color: "#f0f0f0",
    padding: 14,
    marginVertical: 8,
    borderRadius: 8,
    width: "100%",
    fontSize: 16,
  },
  textarea: {
    height: 100,
    textAlignVertical: "top",
  },
  imageButton: {
    backgroundColor: "#2a2a2a",
    padding: 14,
    borderRadius: 8,
    width: "100%",
    marginVertical: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#f0f0f0",
    fontSize: 16,
  },
  imagePreview: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 10,
  },
  imagePreviewItem: {
    width: 100,
    height: 100,
    margin: 5,
    borderRadius: 8,
    resizeMode: "cover",
  },
});
 
export default PostListing;