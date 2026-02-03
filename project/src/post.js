import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./post.css";

const PostListing = ({ onAddListing, listings }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [type, setType] = useState("");
  const [images, setImages] = useState([]);

  const navigate = useNavigate();

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files).map((file) =>
      URL.createObjectURL(file)
    );
    setImages((prevImages) => [...prevImages, ...files]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !title ||
      !description ||
      !location ||
      !price ||
      !bedrooms ||
      !type ||
      images.length === 0
    ) {
      alert("Please fill out all fields and upload at least one image.");
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
    alert("Listing successfully added!");
    navigate("/search");
  };

  return (
    <div className="post-listing-container">
      <img src="/downloadd.png" alt="Logo" className="logo" />
      <h2>Post a Listing</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="text"
          placeholder="Price (e.g., $1200/month)"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="Bedrooms"
          value={bedrooms}
          onChange={(e) => setBedrooms(e.target.value)}
        />
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="">Select Property Type</option>
          <option value="House">House</option>
          <option value="Villa">Villa</option>
          <option value="Castle">Castle</option>
        </select>
        <input type="file" multiple accept="image/*" onChange={handleImageUpload} />
        <button type="submit">Submit Listing</button>
      </form>
    </div>
  );
};

export default PostListing;
