import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect } from 'react';
import L from 'leaflet';

function UpdateMap({ mapUrl }) {
    const map = useMap();

    useEffect(() => {
        if (mapUrl) {
            const layer = L.tileLayer(mapUrl);
            map.eachLayer((layer) => {
                if (layer._url !== "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png") {
                    map.removeLayer(layer);
                }
            });
            map.addLayer(layer);
        }
    }, [mapUrl, map]);

    return null;
}

export default function Map({ data }) {
    return (
        <MapContainer center={[0, 0]} zoom={2} style={{ height: '100vh', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {data && <UpdateMap mapUrl={data.mapUrl} />}
        </MapContainer>
    );
}
