import { useEffect } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet-gpx";

type GPXMapProps = {
  gpxUrl: string;
};

function GPXTrack({ gpxUrl }: GPXMapProps) {
  const map = useMap();

  useEffect(() => {
    const gpx = new L.GPX(gpxUrl, {
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
      center={[11.1271, 78.6569]} // Fallback initial location (Tamil Nadu)
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
