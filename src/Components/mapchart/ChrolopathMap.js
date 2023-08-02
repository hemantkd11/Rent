// import { MapContainer, TileLayer } from "react-leaflet";
// import "./map.css";
// const center = [29.913178161011906, 47.506284930172825];
// const Chrolopath = () => {
//   return (
//     <>
//       <MapContainer
//         center={center}
//         zoom={10}
//         scrollWheelZoom={true}
//         style={{ width:"200px", height: "500px" }}
//       >
//         <TileLayer
//           attribution="Map tiles by Carto, under CC BY 3.0. Data by OpenStreetMap, under ODbL."
//           url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
//         />
//       </MapContainer>
//     </>
//   );
// };

// export default Chrolopath;


import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "./map.css";

const center = [29.913178161011906, 47.506284930172825];
const areasData = [
  {
    id: 1,
    name: "Area 1",
    color: "red",
    coordinates: [
      [
        [29.9, 47.5],
        [29.91, 47.5],
        [29.91, 47.51],
        [29.9, 47.51],
        [29.9, 47.5],
      ],
    ],
  },
  {
    id: 2,
    name: "Area 2",
    color: "blue",
    coordinates: [
      [
        [29.91, 47.51],
        [29.92, 47.51],
        [29.92, 47.52],
        [29.91, 47.52],
        [29.91, 47.51],
      ],
    ],
  },
  // Add more areas as needed
];

const Chrolopath = () => {
  return (
    <>
      <MapContainer
        center={center}
        zoom={10}
        scrollWheelZoom={true}
        style={{ width: "1400px", height: "500px" }}
        attributionControl={false} // Add this line to disable attribution control
      >
        <TileLayer
          attribution=""
          url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
        />

        {areasData.map((area) => (
          <GeoJSON
            key={area.id}
            data={{
              type: "Feature",
              properties: { name: area.name },
              geometry: { type: "Polygon", coordinates: area.coordinates },
            }}
            style={() => ({
              fillColor: area.color,
              weight: 1,
              color: "white",
              fillOpacity: 0.6,
            })}
          />
        ))}
      </MapContainer>
    </>
  );
};

export default Chrolopath;
