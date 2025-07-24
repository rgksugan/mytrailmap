import type { Trail } from "@/data/trails";
import { parseGpxFile } from "@/util/parseGpxFile";
import {
  Box,
  Card,
  Flex,
  Heading,
  Separator,
  Stat,
  Tag,
  Text,
  VStack,
  Wrap,
} from "@chakra-ui/react";
import { LatLngBounds } from "leaflet";
import { useEffect, useState } from "react";
import { MapContainer, Polyline, TileLayer, useMap } from "react-leaflet";

function FitBounds({ positions }: { positions: [number, number][] }) {
  const map = useMap();

  useEffect(() => {
    if (positions.length) {
      const bounds = new LatLngBounds(positions);
      map.fitBounds(bounds, { padding: [20, 20] });
    }
  }, [positions, map]);

  return null;
}

export const TrailCard = ({ trail }: { trail: Trail }) => {
  const [positions, setPositions] = useState<[number, number][]>([]);

  useEffect(() => {
    async function loadGpx() {
      const gpxPath = `/mytrailmap/data/${trail.id}.gpx`;
      const { positions } = await parseGpxFile(gpxPath);
      setPositions(positions);
    }

    loadGpx();
  }, [trail]);

  return (
    <Card.Root colorPalette="green" variant="elevated">
      <Box w="100%" h="200px">
        <MapContainer
          center={[0, 0]}
          zoom={14}
          scrollWheelZoom={false}
          dragging={false}
          zoomControl={false}
          doubleClickZoom={false}
          attributionControl={false}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://tile.opentopomap.org/{z}/{x}/{y}.png"
            attribution='Map data © <a href="https://opentopomap.org">OpenTopoMap</a>'
          />
          <Polyline positions={positions} color={"red"} weight={3} />
          <FitBounds positions={positions} />
        </MapContainer>
      </Box>
      <Card.Header>
        <Heading size="4xl">{trail.title}</Heading>
      </Card.Header>
      <Card.Body>
        <Text>{trail.description}</Text>
      </Card.Body>
      <Card.Footer>
        <VStack align="start" w="100%">
          <Flex justify="space-between" align="center" w="100%">
            <Box>
              <Stat.Root>
                <Stat.Label>Distance</Stat.Label>
                <Stat.ValueText>
                  {trail.distance}
                  <Stat.ValueUnit>km</Stat.ValueUnit>
                </Stat.ValueText>
              </Stat.Root>
            </Box>
            <Separator orientation="vertical" height="12" />
            <Box>
              <Stat.Root>
                <Stat.Label>Time taken</Stat.Label>
                <Stat.ValueText>
                  {trail.movingTime}
                  <Stat.ValueUnit>hours</Stat.ValueUnit>
                </Stat.ValueText>
              </Stat.Root>
            </Box>
            <Separator orientation="vertical" height="12" />
            <Box>
              <Stat.Root>
                <Stat.Label>Elevation gain</Stat.Label>
                <Stat.ValueText>
                  {trail.elevationGain}
                  <Stat.ValueUnit>metres</Stat.ValueUnit>
                </Stat.ValueText>
              </Stat.Root>
            </Box>
            <Separator orientation="vertical" height="12" />
            <Box>
              <Stat.Root>
                <Stat.Label>Elevation loss</Stat.Label>
                <Stat.ValueText>
                  {trail.elevationLoss}
                  <Stat.ValueUnit>metres</Stat.ValueUnit>
                </Stat.ValueText>
              </Stat.Root>
            </Box>
          </Flex>
          <Wrap pt="3">
            {trail.tags?.map((tag) => (
              <Tag.Root key={tag}>
                <Tag.Label>{tag}</Tag.Label>
              </Tag.Root>
            ))}
          </Wrap>
        </VStack>
      </Card.Footer>
    </Card.Root>
  );
};
