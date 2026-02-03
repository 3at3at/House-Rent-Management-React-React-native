import React from "react";
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from "react-native";

const PropertyDetails = ({ route, navigation }) => {
  const { id, listings } = route.params;  
  const listing = listings.find((item) => item.id === id);

  if (!listing) {
    return <Text style={styles.error}>Property not found.</Text>;
  }

  const handleScheduleVisit = () => {
    
    navigation.navigate('ScheduleVisit', { id });
  };

  return (
    <View style={styles.container}>
      <Image source={require("./assets/downloadd.png")} style={styles.logo} />
      <Text style={styles.heading}>{listing.type} in {listing.location}</Text>

      <FlatList
  data={listing.images}
  keyExtractor={(item, index) => index.toString()}
  horizontal
  renderItem={({ item }) => (
    <Image
      source={typeof item === "string" ? { uri: item } : item} 
      style={styles.image}
    />
  )}
  showsHorizontalScrollIndicator={false}
/>


      <View style={styles.details}>
        <Text style={styles.infoText}><Text style={styles.label}>Price:</Text><Text style={styles.output}> {listing.price} </Text></Text>
        <Text style={styles.infoText}><Text style={styles.label}>Bedrooms:</Text><Text style={styles.output}> {listing.bedrooms}</Text></Text>
        <Text style={styles.infoText}><Text style={styles.label}>Description:</Text> <Text style={styles.output}>{listing.description} </Text></Text>
        <Text style={styles.infoText}><Text style={styles.label}>Contact:</Text> <Text style={styles.output}>{listing.contact}</Text></Text>
      </View>

      <TouchableOpacity style={styles.inquireButton} onPress={handleScheduleVisit}>
        <Text style={styles.inquireButtonText}>Inquire or Schedule Visit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  logo: { width: 100, height: 100, alignSelf: "center", marginBottom: 20 },
  heading: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 20 ,color:"gray" },
  image: { width: 300, height: 200, borderRadius: 10, marginRight: 10 },
  details: { marginTop: 20, padding: 15, backgroundColor: "#f9f9f9", borderRadius: 8 , boxShadow:"2px 1px 5px" },
  output: {color:"#007BFF"},
  infoText: { fontSize: 16, marginBottom: 10 },
  label: { fontWeight: "bold", color: "black" },
  inquireButton: { backgroundColor: "#007BFF", padding: 15, borderRadius: 8, marginTop: 20, alignItems: "center" },
  inquireButtonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
  error: { textAlign: "center", color: "red", marginTop: 20, fontSize: 18 },
});

export default PropertyDetails;
