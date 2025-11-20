import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { MapPoint } from '../types';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS

interface Props {
  mapPoints: MapPoint[];
}

export default function RegionalMap({ mapPoints }: Props) {
  const position = [39.8283, -98.5795]; // Center of US

  return (
    <div className="bg-white p-6 rounded-lg shadow h-96">
      <h3 className="text-lg font-medium mb-4">Regional Load Map</h3>
      <MapContainer center={position as [number, number]} zoom={4} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {mapPoints.map((point, i) => (
          <Marker key={i} position={[point.latitude, point.longitude]}>
            <Popup>
              <div>
                <h4>{point.region}</h4>
                <p>Loads: {point.loadCount}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
