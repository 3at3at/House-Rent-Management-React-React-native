import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./home";
import SearchListings from "./search";
import PostListing from "./post";
import PropertyDetails from "./details";
import ScheduleVisit from "./visit";
import About from "./about";
import Contact from "./contact";

const App = () => {

  const [listings, setListings] = useState([
    {
      id: 1,
      images: ["/newyork1.webp", "/newyork2.webp", "/newyork3.webp", "/newyork4.webp"],
      price: "$1200/month",
      location: "New York",
      bedrooms: 2,
      type: "House",
      description:  "Nestled in the bustling streets of New York, this cozy 2-bedroom house offers the perfect blend of comfort and urban living. Featuring a spacious living area, modern kitchen, and a private patio, it’s ideal for small families or professionals. Conveniently located near top dining spots, shopping centers, and public transport, this home ensures an exciting city lifestyle.",
      contact: "landlordNY@example.com",
    },
    {
      id: 2,
      images: ["/losangeles1.webp", "/losangeles2.webp", "/losangeles3.webp", "/losangeles4.webp"],
      price: "$1500/month",
      location: "Los Angeles",
      bedrooms: 3,
      type: "House",
      description: "Experience luxury and comfort in this spacious 3-bedroom house located in sunny Los Angeles. Featuring a large backyard perfect for outdoor activities, this property is great for families. The modern interiors include an open floor plan, a gourmet kitchen, and a master suite with an en-suite bathroom. Close to beaches, entertainment hubs, and schools.",
      contact: "landlordLA@example.com",
    },
    {
      id: 3,
      images: ["/chicago1.webp", "/chicago2.webp", "/chicago3.webp", "/chicago4.webp"],
      price: "$1000/month",
      location: "Chicago",
      bedrooms: 1,
      type: "Villa",
      description: "This contemporary villa in downtown Chicago redefines urban luxury. Ideal for singles or couples, the property boasts a stylish design with high ceilings, floor-to-ceiling windows, and smart home features. Located minutes away from Chicago’s iconic landmarks, this villa offers a perfect retreat for professionals looking to unwind.",
      contact: "landlordCHI@example.com",
    },
    {
      id: 4,
      images: ["/houston1.webp", "/houston2.webp", "/houston3.webp", "/houston4.webp"],
      price: "$1800/month",
      location: "Houston",
      bedrooms: 4,
      type: "Castle",
      description: "Step into elegance with this luxurious 4-bedroom castle in Houston. Featuring grand architecture, expansive gardens, and state-of-the-art amenities, this property offers a unique living experience. The spacious rooms, high-end finishes, and tranquil surroundings make it perfect for those seeking privacy and sophistication.",
      contact: "landlordHOU@example.com",
    },
    {
      id: 5,
      images: ["/phoenix1.webp", "/phoenix2.webp", "/phoenix3.webp", "/phoenix4.webp"],
      price: "$1300/month",
      location: "Phoenix",
      bedrooms: 2,
      type: "Villa",
      description: "This charming 2-bedroom villa in Phoenix features breathtaking views and a serene ambiance. Designed for relaxation, it offers a bright and airy living space, a fully equipped kitchen, and a beautiful outdoor patio. Enjoy the warm Arizona climate in this oasis, located near hiking trails and local attractions.",
      contact: "landlordPHX@example.com",
    },
    {
      id: 6,
      images: ["/philadelphia1.webp", "/philadelphia2.webp", "/philadelphia3.webp", "/philadelphia4.webp"],
      price: "$900/month",
      location: "Philadelphia",
      bedrooms: 1,
      type: "Castle",
      description:  "Located in historic Philadelphia, this charming 1-bedroom castle offers a blend of old-world charm and modern comforts. The property features a unique architectural design, cozy interiors, and a serene garden. Perfect for history enthusiasts or those seeking a distinctive living space in a culturally rich city.",
      contact: "landlordPHL@example.com",
    },
  ]);

  const addListing = (newListing) => {
    setListings((prevListings) => [...prevListings, newListing]);
  };

  return (
    <Router>
      <div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/search"
            element={<SearchListings listings={listings} />}
          />
          <Route
            path="/post"
            element={<PostListing onAddListing={addListing} listings={listings} />}
          />
          <Route
            path="/details/:id"
            element={<PropertyDetails listings={listings} />}
          />
          <Route path="/visit/:id" element={<ScheduleVisit />} />
          <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
