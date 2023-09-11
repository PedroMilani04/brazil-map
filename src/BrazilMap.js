import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './BrazilMap.css';
import SideBar from './SideBar';

const BrazilMap = () => {
  const [geojsonData, setGeojsonData] = useState(null);

  useEffect(() => {
    // Fetch the GeoJSON data for all Brazilian states
    fetch('https://api.npoint.io/b6e62b85786ebb5b7f80')
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

  const [selectedState, setSelectedState] = useState("Estado");
  // starting new info states
  const [selectedCapital, setSelectedCapital] = useState("Capital");
  const [selectedBiome, setSelectedBiome] = useState("Bioma");
  const [selectedFuso, setSelectedFuso] = useState("Fuso");
  const [selectedPopul, setSelectedPopul] = useState("População");


  return (
    <div className='all'>
      <SideBar selectedState={selectedState}/>
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
            style={(feature) => {
              if (feature.properties.regiao_id === '1') {
                return { color: '#7F3687' }; // Set color to pink
              } else if (feature.properties.regiao_id === '2') {
                return { color: '#E21349' }; // Set the default color for other states
              } else if (feature.properties.regiao_id === '3') {
                return { color: '#42A62A' }; // Set the default color for other states
              } else if (feature.properties.regiao_id === '4') {
                return { color: '#0B71B4' }; // Set the default color for other states
              } else if (feature.properties.regiao_id === '5') {
                return { color: '#F8B236' }; // Set the default color for other states
              }
            }}
            onEachFeature={(feature, layer) => {
              layer.on({
                mouseover: () => {if (feature.properties.regiao_id === '1') {
                  layer.setStyle({ color: '#a864af' });
                } else if (feature.properties.regiao_id === '2') {
                  layer.setStyle({ color: '#ea466f' });
                } else if (feature.properties.regiao_id === '3') {
                  layer.setStyle({ color: '#77cc61' });
                } else if (feature.properties.regiao_id === '4') {
                  layer.setStyle({ color: '#338cc4' });
                } else if (feature.properties.regiao_id === '5') {
                  layer.setStyle({ color: '#f7cd85' });
                }
              },
                mouseout: () => {
                  if (feature.properties.regiao_id === '1') {
                    layer.setStyle({ color: '#7F3687' });
                  } else if (feature.properties.regiao_id === '2') {
                    layer.setStyle({ color: '#E21349' });
                  } else if (feature.properties.regiao_id === '3') {
                    layer.setStyle({ color: '#42A62A' });
                  } else if (feature.properties.regiao_id === '4') {
                    layer.setStyle({ color: '#0B71B4' });
                  } else if (feature.properties.regiao_id === '5') {
                    layer.setStyle({ color: '#F8B236' });
                  }
                },
                click: () => {
                  setSelectedState(feature.properties.name)
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
