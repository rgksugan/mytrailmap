type GpxPoint = {
  lat: number;
  lon: number;
  ele: number;
};

type ParsedGpxData = {
  points: GpxPoint[];
  positions: [number, number][];
};

export async function parseGpxFile(url: string): Promise<ParsedGpxData> {
  const res = await fetch(url);
  const xmlText = await res.text();
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlText, "application/xml");

  const trkpts = xmlDoc.getElementsByTagName("trkpt");

  const points: GpxPoint[] = [];

  for (let i = 0; i < trkpts.length; i++) {
    const pt = trkpts[i];
    const lat = parseFloat(pt.getAttribute("lat") || "0");
    const lon = parseFloat(pt.getAttribute("lon") || "0");

    const eleElement = pt.getElementsByTagName("ele")[0];
    const ele = eleElement ? parseFloat(eleElement.textContent || "0") : 0;

    points.push({ lat, lon, ele });
  }

  const positions: [number, number][] = points.map((pt) => [pt.lat, pt.lon]);

  return { points, positions };
}

export function computeCenter(points: [number, number][]): [number, number] {
  if (!points.length) return [0, 0];

  const latSum = points.reduce((sum, pt) => sum + pt[0], 0);
  const lonSum = points.reduce((sum, pt) => sum + pt[1], 0);
  return [latSum / points.length, lonSum / points.length];
}

export function computeBounds(
  points: [number, number][]
): [[number, number], [number, number]] {
  if (!points.length)
    return [
      [0, 0],
      [0, 0],
    ];

  const lats = points.map((p) => p[0]);
  const lons = points.map((p) => p[1]);
  return [
    [Math.min(...lats), Math.min(...lons)],
    [Math.max(...lats), Math.max(...lons)],
  ];
}
