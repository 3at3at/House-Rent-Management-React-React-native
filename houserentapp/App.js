import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./Home";
import SearchListings from "./Search";
import PropertyDetails from "./PropertyDetails";
import ScheduleVisit from "./ScheduleVisit";
import About from "./About"; 
import Contact from "./Contact Us";
import PostListing from "./PostListing";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const SearchStack = ({ listings }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SearchListings"
        options={{ title: "Search Listings" }}
        children={({ navigation }) => (
          <SearchListings listings={listings} navigation={navigation} />
        )}
      />
      <Stack.Screen
        name="PropertyDetails"
        options={{ title: "Property Details" }}
        component={PropertyDetails}
      />
      <Stack.Screen
        name="ScheduleVisit"
        options={{ title: "Schedule Visit" }}
        component={ScheduleVisit}
      />
    </Stack.Navigator>
  );
};

const App = () => {

  const onAddListing = (newListing) => {
    setListings((prevListings) => [...prevListings, newListing]);
  };

  const [listings, setListings] = useState([
    {
      id: 1,
      images: [
        require("./assets/newyork1.webp"),
        require("./assets/newyork2.webp"),
        require("./assets/newyork3.webp"),
        require("./assets/newyork4.webp"),
      ],
      price: "$1200/month",
      location: "New York",
      bedrooms: 2,
      type: "House",
      description: "Nestled in the bustling streets of New York, this cozy 2-bedroom house offers the perfect blend of comfort and urban living.",
      contact: "landlordNY@example.com",
    },
    {
      id: 2,
      images: [
        require("./assets/losangeles1.webp"),
        require("./assets/losangeles2.webp"),
        require("./assets/losangeles3.webp"),
        require("./assets/losangeles4.webp"),
      ],
      price: "$1500/month",
      location: "Los Angeles",
      bedrooms: 3,
      type: "House",
      description: "Experience luxury and comfort in this spacious 3-bedroom house located in sunny Los Angeles.",
      contact: "landlordLA@example.com",
    },
    {
      id: 3,
      images: [
        require("./assets/chicago1.webp"),
        require("./assets/chicago2.webp"),
        require("./assets/chicago3.webp"),
        require("./assets/chicago4.webp"),
      ],
      price: "$1000/month",
      location: "Chicago",
      bedrooms: 1,
      type: "Villa",
      description: "This contemporary villa in downtown Chicago redefines urban luxury. Ideal for singles or couples, the property boasts a stylish design with high ceilings.",
      contact: "landlordCHI@example.com",
    },
    {
      id: 4,
      images: [
        require("./assets/houston1.webp"),
        require("./assets/houston2.webp"),
        require("./assets/houston3.webp"),
        require("./assets/houston4.webp"),
      ],
      price: "$1800/month",
      location: "Houston",
      bedrooms: 4,
      type: "Castle",
      description: "Step into elegance with this luxurious 4-bedroom castle in Houston.",
      contact: "landlordHOU@example.com",
    },
    {
      id: 5,
      images: [
        require("./assets/phoenix1.webp"),
        require("./assets/phoenix2.webp"),
        require("./assets/phoenix3.webp"),
        require("./assets/phoenix4.webp"),
      ],
      price: "$1300/month",
      location: "Phoenix",
      bedrooms: 2,
      type: "Villa",
      description: "This charming 2-bedroom villa in Phoenix features breathtaking views and a serene ambiance. Designed for relaxation, it offers a bright and airy living space.",
      contact: "landlordPHX@example.com",
    },
    {
      id: 6,
      images: [
        require("./assets/philadelphia1.webp"),
        require("./assets/philadelphia2.webp"),
        require("./assets/philadelphia3.webp"),
        require("./assets/philadelphia4.webp"),
      ],
      price: "$900/month",
      location: "Philadelphia",
      bedrooms: 1,
      type: "Castle",
      description: "Located in historic Philadelphia, this charming 1-bedroom castle offers a blend of old-world charm and modern comforts.",
      contact: "landlordPHL@example.com",
    },
  ]);

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Search" component={() => <SearchStack listings={listings} />} />
        <Drawer.Screen name="Post Listing" component={() => <PostListing onAddListing={onAddListing} listings={listings} />} />
        <Drawer.Screen name="About" component={About} /> 
        <Drawer.Screen name="Contact Us" component={Contact} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
