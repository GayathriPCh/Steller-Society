import React, { useState } from "react";

// Import images
import spiderImage from "./spider.jpeg";
import godzillaImage from "./godzilla.jpeg";
import sageImage from "./sage.jpeg";
import neverImage from "./reason.jpeg";
import somedayImage from "./someday.jpeg";
import wonderImage from "./wonder.jpeg";
import goneImage from "./gone.jpeg";
import powerfulImage from "./powerful.jpeg";
import siaImage from "./sia.jpeg";
import watchImage from "./watch.jpeg";
import napkinsImage from "./napkins.jpeg";
import almostImage from "./almost.jpeg";
import porscheImage from "./porsche.jpeg";
import cirqueImage from "./cirque.jpeg";
import swimImage from "./swim.jpeg";
import closeEyesImage from "./closeeyes.jpeg";
import paradiseImage from "./paradise.jpeg";
import bazziImage from "./bazzi.jpeg";
import missImage from "./miss.jpeg";
import tumseImage from "./tumse.jpeg";
import barfiImage from "./barfi.jpeg";
import jonitaImage from "./jonita.jpeg";
import tereBinaImage from "./terebina.jpeg";
import mitrazImage from "./mitraz.jpeg";
import halseyImage from "./halsey.jpeg";

// Define CSS styles inline
const styles = {
  screenContainer: {
    padding: "20px",
  },
  searchBar: {
    marginBottom: "20px",
    borderRadius: "20px",
    backgroundColor: "#eee",
    padding: "10px 20px",
    border: "none",
    outline: "none",
    width: "100%",
  },
  shimmeringText: {
    fontWeight: "bold",
    color: "purple",
    animation: "shimmer 1.5s ease-in-out infinite",
  },
  songGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gap: "20px",
  },
  songCard: {
    border: "1px solid #ccc",
    borderRadius: "5px",
    padding: "10px",
    textAlign: "center",
    background: "black",
    color: "white",
  },
};

// Sample data for song cards
const songData = [
  { id: 1, title: "Spider", imageUrl: spiderImage, description: "Description 1" },
  { id: 2, title: "Godzilla", imageUrl: godzillaImage, description: "Description 2" },
  { id: 3, title: "Sage", imageUrl: sageImage, description: "Description 3" },
  { id: 4, title: "Never", imageUrl: neverImage, description: "Description 4" },
  { id: 5, title: "Someday", imageUrl: somedayImage, description: "Description 5" },
  { id: 6, title: "Wonder", imageUrl: wonderImage, description: "Description 6" },
  { id: 7, title: "Gone", imageUrl: goneImage, description: "Description 7" },
  { id: 8, title: "Powerful", imageUrl: powerfulImage, description: "Description 8" },
  { id: 9, title: "Sia", imageUrl: siaImage, description: "Description 9" },
  { id: 10, title: "Watch", imageUrl: watchImage, description: "Description 10" },
  { id: 11, title: "Napkins", imageUrl: napkinsImage, description: "Description 11" },
  { id: 12, title: "Almost", imageUrl: almostImage, description: "Description 12" },
  { id: 13, title: "Porsche", imageUrl: porscheImage, description: "Description 13" },
  { id: 14, title: "Cirque", imageUrl: cirqueImage, description: "Description 14" },
  { id: 15, title: "Swim", imageUrl: swimImage, description: "Description 15" },
  { id: 16, title: "Close Eyes", imageUrl: closeEyesImage, description: "Description 16" },
  { id: 17, title: "Paradise", imageUrl: paradiseImage, description: "Description 17" },
  { id: 18, title: "Bazzi", imageUrl: bazziImage, description: "Description 18" },
  { id: 19, title: "Miss", imageUrl: missImage, description: "Description 19" },
  { id: 20, title: "Tumse", imageUrl: tumseImage, description: "Description 20" },
  { id: 21, title: "Barfi", imageUrl: barfiImage, description: "Description 21" },
  { id: 22, title: "Jonita", imageUrl: jonitaImage, description: "Description 22" },
  { id: 23, title: "Tere Bina", imageUrl: tereBinaImage, description: "Description 23" },
  { id: 24, title: "Mitraz", imageUrl: mitrazImage, description: "Description 24" },
  { id: 25, title: "Halsey", imageUrl: halseyImage, description: "Description 25" },
];

export default function Trending() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredSongs, setFilteredSongs] = useState(songData); // Initialize with all songs

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Filter song cards based on the search query
    const filtered = songData.filter((song) =>
      song.title.toLowerCase().includes(query.toLowerCase())
    );

    // Update filteredSongs state with filtered song cards
    setFilteredSongs(filtered);
  };

  return (
    <div style={styles.screenContainer}>
      <div style={styles.searchBar}>
        <input
          type="text"
          placeholder="Search songs..."
          value={searchQuery}
          onChange={handleSearchChange}
          style={styles.shimmeringText}
        />
      </div>
      <div style={styles.songGrid}>
        {filteredSongs.map((song) => (
          <div key={song.id} style={styles.songCard}>
            <img src={song.imageUrl} alt={song.title} />
            <h3>{song.title}</h3>
            <p>{song.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
