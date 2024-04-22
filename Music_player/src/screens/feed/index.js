import React from "react";

// Import images for Nebulae
import nebulaeImage1 from "./nebulae1.jpeg";
import nebulaeImage2 from "./art1.jpeg";
import nebulaeImage3 from "./nebulae3.jpeg";
import nebulaeImage4 from "./nebulae4.jpeg";
import nebulaeImage5 from "./nebulae5.jpeg";

// Import images for Starry Sky
import starrySkyImage1 from "./starry_sky1.jpeg";
import starrySkyImage2 from "./art3.jpeg";
import starrySkyImage3 from "./starry_sky3.jpeg";
import starrySkyImage4 from "./starry_sky4.jpeg";
import starrySkyImage5 from "./starry_sky5.jpeg";

// Import images for Galaxy
import galaxyImage1 from "./galaxy1.jpeg";
import galaxyImage2 from "./galaxy2.jpeg";
import galaxyImage3 from "./pattern2.jpeg";
import galaxyImage4 from "./galaxy4.jpeg";
import galaxyImage5 from "./galaxy5.jpeg";

// Import images for Auroras
import auroraImage1 from "./aurora1.jpeg";
import auroraImage2 from "./aurora2.jpeg";
import auroraImage3 from "./aurora3.jpeg";
import auroraImage4 from "./aurora4.jpeg";
import auroraImage5 from "./aurora5.jpeg";

// Import images for Space Stations
import stationImage1 from "./station1.jpeg";
import stationImage2 from "./station2.jpeg";
import stationImage3 from "./station3.jpeg";
import stationImage4 from "./station4.jpeg";
import stationImage5 from "./station5.jpeg";

// Import images for Space Art

// Define categories with their images
const categories = [
  {
    name: "Nebulae",
    images: [nebulaeImage1, nebulaeImage2, nebulaeImage3, nebulaeImage4, nebulaeImage5],
  },
  {
    name: "Starry Sky",
    images: [starrySkyImage1, starrySkyImage2, starrySkyImage3, starrySkyImage4, starrySkyImage5],
  },
  {
    name: "Galaxy",
    images: [galaxyImage1, galaxyImage2, galaxyImage3, galaxyImage4, galaxyImage5],
  },
  {
    name: "Auroras",
    images: [auroraImage1, auroraImage2, auroraImage3, auroraImage4, auroraImage5],
  },
  {
    name: "Space Stations",
    images: [stationImage1, stationImage2, stationImage3, stationImage4, stationImage5],
  },
];

export default function Feed() {
  return (
    <div className="customize-player-container">
      <h1 style={{ fontSize: "8rem", marginBottom: "18px",color: "#f6f5f7" }}>Customize your player</h1>
      {categories.map((category, index) => (
        <div className="category-row" key={index}>
          <h2 style={{ fontSize: "5rem", marginBottom: "10px",color: "#f6f5f7" }}>{category.name}</h2>
          <div className="image-cards-container">
            <div className="image-row">
              {category.images.map((image, idx) => (
                <div className="image-card" key={idx}>
                  <img src={image} alt={`${category.name} ${idx + 1}`} style={{ borderRadius: "15px", width: "300px", height: "200px" }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
      <style>{`
        .customize-player-container {
          padding: 20px;
        }

        .category-row {
          margin-bottom: 40px;
        }

        .image-cards-container {
          overflow-x: auto;
          white-space: nowrap;
        }

        .image-row {
          display: inline-flex;
          gap: 20px;
        }

        .image-card {
          border-radius: 15px;
          overflow: hidden;
          transition: transform 0.2s;
        }

        .image-card:hover {
          transform: scale(1.1);
        }

        .image-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      `}</style>
    </div>
  );
}