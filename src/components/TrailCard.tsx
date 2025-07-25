import type { Trail } from "@/data/trails";
import { parseGpxFile } from "@/util/parseGpxFile";
import { Box, Card, Heading, Tag, Text, VStack, Wrap } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { MapContainer, Polyline, TileLayer } from "react-leaflet";

import { FitBounds } from "./FitBounds";
import { TrailStats } from "./TrailStats";

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
          <TrailStats trail={trail} />
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
