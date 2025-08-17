import { FitBounds } from "@/components/FitBounds";
import { TagCloud } from "@/components/TagCloud";
import { TrailCard } from "@/components/TrailCard";
import { TrailStats } from "@/components/TrailStats";
import { trails } from "@/data/trails";
import { parseGpxFile } from "@/util/parseGpxFile";
import {
  Bleed,
  Box,
  Breadcrumb,
  Button,
  Card,
  Container,
  Flex,
  Heading,
  HStack,
  Icon,
  Link,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useEffect, useMemo, useState } from "react";
import { FiMapPin } from "react-icons/fi";
import {
  LayersControl,
  MapContainer,
  Polyline,
  TileLayer,
} from "react-leaflet";
import { Link as RouterLink, useParams } from "react-router-dom";

export default function HikeDetailPage() {
  const [positions, setPositions] = useState<[number, number][]>([]);
  const { id } = useParams();
  const trail = trails.find((h) => h.id === id);

  const relatedTrails = useMemo(() => {
    if (!trail) return [];
    return trails
      .filter(
        (t) =>
          t.id !== trail.id && t.tags.some((tag) => trail.tags.includes(tag))
      )
      .slice(0, 4);
  }, [trail]);

  useEffect(() => {
    async function loadGpx() {
      const gpxPath = `/mytrailmap/data/${trail?.id}.gpx`;
      const { positions } = await parseGpxFile(gpxPath);
      setPositions(positions);
    }

    if (trail) {
      loadGpx();
    }
  }, [trail]);

  if (!trail) {
    return (
      <Container py={8}>
        <Heading>Trail Not Found</Heading>
      </Container>
    );
  }

  return (
    <Container pb={8}>
      <Bleed>
        <Box w="100%" h="500px">
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
            <Polyline positions={positions} color={"red"} weight={3} />
            <FitBounds positions={positions} />
            <LayersControl>
              <LayersControl.BaseLayer checked name="OpenStreetMap">
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              </LayersControl.BaseLayer>
              <LayersControl.BaseLayer name="Topographic">
                <TileLayer url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png" />
              </LayersControl.BaseLayer>
            </LayersControl>
          </MapContainer>
        </Box>
      </Bleed>
      <Breadcrumb.Root mt={"2"}>
        <Breadcrumb.List>
          <Breadcrumb.Item>
            <Breadcrumb.Link asChild>
              <Link href="/">Home</Link>
            </Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator />
          <Breadcrumb.Item>
            <Breadcrumb.CurrentLink>{trail.title}</Breadcrumb.CurrentLink>
          </Breadcrumb.Item>
        </Breadcrumb.List>
      </Breadcrumb.Root>
      <Stack>
        <Flex
          direction={{ base: "column", md: "row" }}
          justify={{ base: "flex-start", md: "space-between" }}
          align={{ base: "stretch", md: "center" }}
          w="100%"
          gap={4}
        >
          <Heading size="5xl">{trail.title}</Heading>
          <a
            href={`/mytrailmap/data/${trail.id}.gpx`}
            download={`${trail.id}.gpx`}
            style={{ textDecoration: "none" }}
          >
            <Button colorPalette="teal" width={{ base: "100%", md: "auto" }}>
              Download GPX file
            </Button>
          </a>
        </Flex>
        {(trail.district || trail.state || trail.country) && (
          <HStack>
            <Icon as={FiMapPin} />
            <Text fontSize="sm">
              {[trail.district, trail.state, trail.country]
                .filter(Boolean)
                .join(", ")}
            </Text>
          </HStack>
        )}
      </Stack>
      <Card.Root mt="5" colorPalette="green">
        <Card.Body>
          <TrailStats trail={trail} />
        </Card.Body>
      </Card.Root>
      {trail.overview && (
        <Card.Root mt="5" colorPalette="green">
          <Card.Body>
            <Text>{trail.overview}</Text>
          </Card.Body>
        </Card.Root>
      )}

      <Card.Root mt="5" colorPalette="teal">
        <Card.Header>
          <Heading size="lg">Explore by Tags</Heading>
        </Card.Header>
        <Card.Body>
          <TagCloud />
        </Card.Body>
      </Card.Root>

      {relatedTrails.length > 0 && (
        <Card.Root mt="5" colorPalette="blue" w="100%">
          <Card.Header>
            <Heading size="lg">Related Trails</Heading>
          </Card.Header>
          <Card.Body>
            <SimpleGrid columns={{ base: 1, md: 2 }} columnGap={4} rowGap={4}>
              {relatedTrails.map((relatedTrail) => (
                <LinkBox key={relatedTrail.id}>
                  <LinkOverlay asChild>
                    <RouterLink to={`/hike/${relatedTrail.id}`}>
                      <TrailCard trail={relatedTrail} />
                    </RouterLink>
                  </LinkOverlay>
                </LinkBox>
              ))}
            </SimpleGrid>
          </Card.Body>
        </Card.Root>
      )}
    </Container>
  );
}
