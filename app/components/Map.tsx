'use client';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useCountries } from '@/hooks/useCountries';
import { icon } from 'leaflet';

/* Add Marker Image ----------------- */
const Icon = icon({
  iconUrl:
    'https://play-lh.googleusercontent.com/5WifOWRs00-sCNxCvFNJ22d4xg_NQkAODjmOKuCQqe57SjmDw8S6VOSLkqo6fs4zqis',
  iconSize: [50, 50],
});

// ─── Comp ─────────────────────────────────────────── 🟩 ─

const Map = ({ location }: { location: string }) => {
  const { getCountryByValue } = useCountries();
  const latLang = getCountryByValue(location)?.latLang;
  // ─── Return ──────────────────────────────────────────────

  return (
    <div className="flex items-center justify-center">
      <MapContainer
        center={latLang ?? [51.02, -1.3]}
        zoom={6}
        scrollWheelZoom={false}
        className="h-[50vh] items-center w-[380px] rounded-lg relative z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={latLang ?? [51.02, -1.3]}
          icon={Icon}
        />
      </MapContainer>
    </div>
  );
};
export default Map;
