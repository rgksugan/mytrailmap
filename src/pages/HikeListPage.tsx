import { hikes } from "@/data/trails";
import {
  Card,
  Container,
  Heading,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
  Stat,
  Tag,
  Wrap,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function HikeListPage() {
  return (
    <Container maxW="container.lg" py={8}>
      <Heading mb={6}>My Trail Map</Heading>
      <SimpleGrid columns={2} columnGap={4} rowGap={4}>
        {hikes.map((hike) => (
          <LinkBox key={hike.id}>
            <LinkOverlay asChild>
              <Link to={`/hike/${hike.id}`}>
                <Card.Root>
                  <Card.Header>
                    <Heading size="5xl">{hike.title}</Heading>
                  </Card.Header>
                  <Card.Body>
                    <Wrap>
                      <Stat.Root>
                        <Stat.Label>Distance</Stat.Label>
                        <Stat.ValueText>
                          {hike.distance}
                          <Stat.ValueUnit>km</Stat.ValueUnit>
                        </Stat.ValueText>
                      </Stat.Root>
                      <Stat.Root>
                        <Stat.Label>Elevation gain</Stat.Label>
                        <Stat.ValueText>
                          {hike.elevation}
                          <Stat.ValueUnit>metres</Stat.ValueUnit>
                        </Stat.ValueText>
                      </Stat.Root>
                    </Wrap>
                    <Wrap pt="3">
                      {hike.tags?.map((tag) => (
                        <Tag.Root key={tag}>
                          <Tag.Label>{tag}</Tag.Label>
                        </Tag.Root>
                      ))}
                    </Wrap>
                  </Card.Body>
                  <Card.Footer />
                </Card.Root>
              </Link>
            </LinkOverlay>
          </LinkBox>
        ))}
      </SimpleGrid>
    </Container>
  );
}
