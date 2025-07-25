import { LatLngBounds } from "leaflet";
import { useEffect } from "react";
import { useMap } from "react-leaflet";

export function FitBounds({ positions }: { positions: [number, number][] }) {
  const map = useMap();

  useEffect(() => {
    if (positions.length) {
      const bounds = new LatLngBounds(positions);
      map.fitBounds(bounds, { padding: [20, 20] });
    }
  }, [positions, map]);

  return null;
}
