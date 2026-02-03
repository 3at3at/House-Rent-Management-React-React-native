import React , {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import './home.css'; 
 
const Home = () => {

  const [searchInput , setSearchInput] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
     if (searchInput.toLowerCase() === "available rents")
       { navigate("/search"); }
      else 
      {alert("No matching results for your search."); } };

  return (
    <div className="home-container">
      <header className="header">
        <img src="downloadd.png" alt="Logo" className="logo" />
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/search">Search Listings</Link>
          <Link to="/post">Post Listing</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>
 
      <main>
        <h1>Welcome to Rent Housing System</h1>
        <p>Connecting displaced individuals with available rental properties</p>
        <div className="search">
          <input type="text" 
          placeholder="Search..." 
          className="search-input" 
          value={searchInput}
          onChange={(e)=>setSearchInput(e.target.value)}  />

          <button className="search-button"
          onClick={handleSearch}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
      </main>
    </div>
  );
};
 
export default Home;
 