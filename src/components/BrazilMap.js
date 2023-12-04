import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../styles/BrazilMap.css';
import SideBar from './SideBar';
import Aos from "aos";
import "aos/dist/aos.css";

// USEEFFECT - Inicia AOS uma vez por inicialização
const BrazilMap = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
}, []);


  const [geojsonData, setGeojsonData] = useState(null);

  useEffect(() => {
    // Faz a chamada da informação do GeoJSON via fetch
    fetch('https://api.npoint.io/877e192efe3836825834')
      .then((response) => response.json())
      .then((data) => {
        setGeojsonData(data);
      })
      .catch((error) => {
        console.error('Error fetching GeoJSON data:', error);
      });
  }, []);

  // Definindo as cordenadas do mapa para o Brasil
  const brazilBounds = [
    [-43.75, -107.98], 
    [15.27, -28.79],  
  ];

  // Zoom minimo e máximo do mapa
  const minZoom = 4;
  const maxZoom = 10;
  // USESTATE - Iniciando as informações iniciais
  const [selectedState, setSelectedState] = useState("--");
  const [selectedCapital, setSelectedCapital] = useState("--");
  const [selectedBiome, setSelectedBiome] = useState("--");
  const [selectedFuso, setSelectedFuso] = useState("--");
  const [selectedPopul, setSelectedPopul] = useState("--");
  const [Img1, setImg1] = useState("https://upload.wikimedia.org/wikipedia/commons/6/66/BLANK_ICON_%28cropped%29.png");
  const [Img2, setImg2] = useState("https://upload.wikimedia.org/wikipedia/commons/6/66/BLANK_ICON_%28cropped%29.png");


  const [key, setKey] = useState(0); // Inicializa a key com 0
  const updateKey = () => {
    setKey((prevKey) => prevKey + 1); // Incremente e muda o valor da key para re-renderizar o componente
  };

  // Função chamada em onClick no estado
  const handleStateClick = (feature, layer) => {
    const bounds = layer.getBounds(); // As fronteiras do mapa
    const map = layer._map; // A layer do mapa em si

    // Dá o zoom e encaixa o estado clicado na tela
    if (map) {
      map.fitBounds(bounds);
    }

    // Atualiza a informação na side bar com as do estado clicado
    setSelectedState(feature.properties.name);
    setSelectedCapital(feature.properties.capital);
    setSelectedBiome(feature.properties.bioma);
    setSelectedPopul(feature.properties.populacao);
    setSelectedFuso(feature.properties.fuso);
    setImg1(feature.properties.img1);
    setImg2(feature.properties.img2);
    updateKey();
  };
  
  // <SideBar> é o componente React de toda a barra lateral com a informação do estado. 
  // Vai receber as informações como PROPS
  return (
    <div className='all'>
      
      <SideBar data-aos="slide-right" data-aos-duration="1800" key={key} selectedState={selectedState} selectedCapital={selectedCapital} selectedBiome={selectedBiome} selectedFuso={selectedFuso} selectedPopul={selectedPopul} Img1={Img1} Img2={Img2} />
      <MapContainer
      className='mapcont'
        center={[-14.235, -51.925]}
        zoom={minZoom} 
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
              if (feature.properties.regiao_id === '1') { // muda a cor das regiões a partir de seu ID
                return { color: '#7F3687' }; 
              } else if (feature.properties.regiao_id === '2') {
                return { color: '#E21349' }; 
              } else if (feature.properties.regiao_id === '3') {
                return { color: '#42A62A' }; 
              } else if (feature.properties.regiao_id === '4') {
                return { color: '#0B71B4' }; 
              } else if (feature.properties.regiao_id === '5') {
                return { color: '#F8B236' }; 
              }
            }}
            onEachFeature={(feature, layer) => {
              layer.on({
                mouseover: () => {if (feature.properties.regiao_id === '1') { // mesa coisa mas no "hover", feito com mouseover
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
                  handleStateClick(feature, layer);

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
