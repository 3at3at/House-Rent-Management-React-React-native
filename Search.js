import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Fuse from "fuse.js";

const SearchListings = ({ listings, navigation }) => {
  const [filteredListings, setFilteredListings] = useState(listings);
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const fuse = new Fuse(listings, {
    keys: ["location"],
    threshold: 0.4,
  });

  const getFilteredListings = () => {
    let fuzzyResults = listings;

    if (location) {
      const fuzzyMatches = fuse.search(location);
      fuzzyResults = fuzzyMatches.map((result) => result.item);
    }

    return fuzzyResults.filter((listing) => {
      const listingPrice = parseFloat(listing.price.replace(/[^0-9.]/g, ""));
      const userPrice = parseFloat(priceRange);

      return (
        (!priceRange || listingPrice <= userPrice) &&
        (!bedrooms || listing.bedrooms.toString() === bedrooms)
      );
    });
  };

  const handleSearch = () => {
    setIsSearching(true);
    const results = getFilteredListings();
    setFilteredListings(results);
    setTimeout(() => setIsSearching(false), 200);
  };

  const getImageSource = (image) => {
    if (typeof image === "string") {//iza hayala url image
  
      return { uri: image };
    } else if (typeof image === "number") {//iza image imported require w assets
    
      return image;
    } else {
      console.warn("Invalid image format. Using fallback.");
       
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require("./assets/downloadd.png")} style={styles.logo} />
      <FlatList
        data={filteredListings}
        keyExtractor={(item) => item.id.toString()}//btaamel unique key la kel item
        ListHeaderComponent={
          <View>
            <TextInput
              placeholder="Location"
              value={location}
              onChangeText={(text) => setLocation(text)}
              style={styles.input}
              placeholderTextColor="#aaa"
            />
            <TextInput
              placeholder="Max Price"
              value={priceRange}
              onChangeText={(text) => setPriceRange(text)}
              keyboardType="numeric"
              style={styles.input}
              placeholderTextColor="#aaa"
            />
            <TextInput
              placeholder="Bedrooms"
              value={bedrooms}
              onChangeText={(text) => setBedrooms(text)}
              keyboardType="numeric"
              style={styles.input}
              placeholderTextColor="#aaa"
            />
            <Pressable
              style={[styles.button, isSearching && styles.buttonActive]}
              onPress={handleSearch}
            >
              <Text style={styles.buttonText}>Search</Text>
            </Pressable>
          </View>
        }
        renderItem={({ item }) => (
          <View style={styles.listingCard}>
            <Image
              source={getImageSource(item.images[0])}
              style={styles.image}
            />
            <Text style={styles.listingLocation}>{item.location}</Text>
            <Text style={styles.listingType}>{item.type}</Text>
            <Text style={styles.listingPrice}>{item.price}</Text>
            <Text style={styles.listingBedrooms}>{item.bedrooms} Bedrooms</Text>
            <TouchableOpacity
              style={styles.detailsButton}
              onPress={() =>
                navigation.navigate("PropertyDetails", {
                  id: item.id,
                  listings: listings, 
                })
              }
            >
              <Text style={styles.detailsButtonText}>View Details</Text>
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.noResults}>No listings found.</Text>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f5f5" },
  logo: {
    width: 120,
    height: 120,
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingLeft: 15,
    marginBottom: 15,
    backgroundColor: "#fff",
  },
  button: { backgroundColor: "grey", paddingVertical: 15, borderRadius: 8, alignItems: "center", marginBottom: 20 },
  buttonActive: { backgroundColor: "#007BFF" },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
  noResults: { color: "#888", fontSize: 18, textAlign: "center", marginTop: 20 },
  listingCard: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 15,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  image: { width: "100%", height: 200, borderRadius: 8, marginBottom: 10 },
  listingLocation: { fontSize: 18, fontWeight: "bold", color: "#333" },
  listingType: { fontSize: 17, color: "#555" },
  listingPrice: { fontSize: 16, color: "#007BFF", marginVertical: 5 },
  listingBedrooms: { fontSize: 14, color: "#555" },
  detailsButton: { marginTop: 10, backgroundColor: "#007BFF", padding: 10, borderRadius: 5 },
  detailsButtonText: { color: "#fff", textAlign: "center", fontWeight: "bold" },
});

export default SearchListings;
