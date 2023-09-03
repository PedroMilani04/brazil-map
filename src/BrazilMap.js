import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './BrazilMap.css';
import SideBar from './SideBar';

const BrazilMap = () => {
  const [geojsonData, setGeojsonData] = useState(null);

  useEffect(() => {
    // Fetch the GeoJSON data for all Brazilian states
    fetch('https://api.npoint.io/fdfe4a45600d57638ae2')
      .then((response) => response.json())
      .then((data) => {
        setGeojsonData(data);
      })
      .catch((error) => {
        console.error('Error fetching GeoJSON data:', error);
      });
  }, []);

  // Define bounds for Brazil (adjust these as needed)
  const brazilBounds = [
    [-33.75, -100.98], // Southwest coordinates of Brazil
    [5.27, -34.79],   // Northeast coordinates of Brazil
  ];

  // Set minimum and maximum zoom levels
  const minZoom = 4;
  const maxZoom = 10;

  return (
    <div className='all'>
      <SideBar />
      <MapContainer
      className='mapcont'
        center={[-14.235, -51.925]}
        zoom={minZoom} // Set the initial zoom level to the minimum
        style={{ height: '100vh' }}
        maxBounds={brazilBounds}
        maxBoundsViscosity={1.0}
        minZoom={minZoom}
        maxZoom={maxZoom}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {geojsonData && (
          <GeoJSON
            data={geojsonData}
            style={{ color: '#199A14' }} // Set initial color
            onEachFeature={(feature, layer) => {
              layer.on({
                mouseover: () => {
                  layer.setStyle({ color: '#1ACF14' }); // Change color on mouseover
                },
                mouseout: () => {
                  layer.setStyle({ color: '#199A14' }); // Reset color on mouseout
                },
                click: () => {
                  window.alert(feature.properties.name)
                },
              });
            }}
          />
        )}
      </MapContainer>
    </div>

  );
};

export default BrazilMap;
