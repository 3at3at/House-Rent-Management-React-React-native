import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./details.css";

const PropertyDetails = ({ listings }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const listing = listings.find((item) => item.id.toString() === id);

  if (!listing) {
    return <p>Property not found.</p>;
  }

  const handleScheduleVisit = () => {
    navigate(`/visit/${listing.id}`);
  };

  return (
    <div className="property-details">
      <img src="/downloadd.png" alt="Logo" className="logo" />
      <h2>{listing.type} in {listing.location}</h2>

      <div className="image-gallery">
        {listing.images.map((img, index) => (
          <img key={index} src={img} alt={`Property ${index + 1}`} className="property-image" />
        ))}
      </div>

      <div className="details-info">
        <p><strong>Price:</strong> {listing.price}</p>
        <p><strong>Bedrooms:</strong> {listing.bedrooms}</p>
        <p><strong>Description:</strong> {listing.description}</p>
        <p><strong>Contact:</strong> {listing.contact}</p>
      </div>

      <button className="inquire-button" onClick={handleScheduleVisit}>
        Inquire or Schedule Visit
      </button>
    </div>
  );
};

export default PropertyDetails;
