import L from "leaflet";
import "leaflet-gpx";
import { useEffect } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";

type GPXMapProps = {
  gpxUrl: string;
};

function GPXTrack({ gpxUrl }: GPXMapProps) {
  const map = useMap();

  useEffect(() => {
    new L.GPX(gpxUrl, {
      async: true,
      marker_options: {
        startIconUrl:
          "https://www.mapbox.com/help/demos/custom-markers/start.png",
        endIconUrl: "https://www.mapbox.com/help/demos/custom-markers/end.png",
      },
    })
      .on("loaded", (e: any) => {
        map.fitBounds(e.target.getBounds());
      })
      .addTo(map);
  }, [gpxUrl, map]);

  return null;
}

export default function GPXMap({ gpxUrl }: GPXMapProps) {
  return (
    <MapContainer
      style={{
        height: "400px",
        width: "100%",
        marginTop: "2rem",
        borderRadius: "8px",
      }}
      center={[12.9629, 77.5775]} // Fallback initial location (Bangalore)
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <GPXTrack gpxUrl={gpxUrl} />
    </MapContainer>
  );
}
