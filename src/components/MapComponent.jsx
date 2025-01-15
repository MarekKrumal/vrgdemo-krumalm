import { useEffect } from "react";
import "ol/ol.css";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { fromLonLat } from "ol/proj";
////https://openlayers.org/en/latest/examples/simple.html

const MapComponent = () => {
  // v useEffectu se vytvori mapa pomoci OpenLayers,
  useEffect(() => {
    const map = new Map({
      target: "map", // mapa se priradi k html elementu is ID map
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: fromLonLat([15.473, 49.8175]), // souradnice CR pomoci fromLonLat
        zoom: 8, //priblizeni
      }),
    });

    // Cleanup při odstranění komponenty- kdyz se to neudela mohou nastat memory leaks
    return () => {
      map.setTarget(null);
    };
  }, []);

  return (
    <div
      id="map"
      style={{ width: "100%", height: "800px", border: "1px solid #ccc" }}
    ></div>
  );
};

export default MapComponent;
