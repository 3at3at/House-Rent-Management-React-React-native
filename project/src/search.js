import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Fuse from "fuse.js";
import "./search.css";

const SearchListings = ({ listings }) => {
  const [filteredListings, setFilteredListings] = useState([]);
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [propertyType, setPropertyType] = useState("");

  const navigate = useNavigate();

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
        (!priceRange || (!isNaN(listingPrice) && listingPrice <= userPrice)) &&
        (!bedrooms || listing.bedrooms.toString() === bedrooms) &&
        (!propertyType || listing.type.toLowerCase() === propertyType.toLowerCase())
      );
    });
  };

  const handleSearch = () => {
    const results = getFilteredListings();
    if (results.length === 0) {
      alert("No listings found matching your criteria.");
    }
    setFilteredListings(results);
  };

  const listingsToDisplay = filteredListings.length > 0 ? filteredListings : listings;

  return (
    <div className="search-listings-container">
      <img src="/downloadd.png" alt="Logo" className="logo" />
      <h2>Search Listings</h2>

      <div className="filters">
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="text"
          placeholder="Price Range (e.g., 1000)"
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
        />
        <input
          type="number"
          placeholder="Bedrooms"
          value={bedrooms}
          onChange={(e) => setBedrooms(e.target.value)}
        />
        <select value={propertyType} onChange={(e) => setPropertyType(e.target.value)}>
          <option value="">Select Property Type</option>
          <option value="House">House</option>
          <option value="Villa">Villa</option>
          <option value="Castle">Castle</option>
        </select>
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="listing-results">
        {listingsToDisplay.map((listing) => (
          <div key={listing.id} className="listing-item">
            <img src={listing.images[0]} alt="property" />
            <h3>{listing.location}</h3>
            <p>{listing.type}</p>
            <p>{listing.price}</p>
            <p>{listing.bedrooms} Bedrooms</p>
            <button onClick={() => navigate(`/details/${listing.id}`)}>
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchListings;
