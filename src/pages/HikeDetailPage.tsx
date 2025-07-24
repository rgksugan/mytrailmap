import { trails } from "@/data/trails";
import {
  Box,
  Breadcrumb,
  Card,
  Container,
  Flex,
  Heading,
  Link,
  Separator,
  Stat,
  Tag,
  Wrap,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";

export default function HikeDetailPage() {
  const { id } = useParams();
  const trail = trails.find((h) => h.id === id);

  if (!trail) {
    return (
      <Container py={8}>
        <Heading>Trail Not Found</Heading>
      </Container>
    );
  }

  return (
    <Container>
      <Breadcrumb.Root>
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
      <Card.Root mt="5" colorPalette="green">
        <Card.Header>
          <Heading size="5xl">{trail.title}</Heading>
        </Card.Header>
        <Card.Body>
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
        </Card.Body>
        <Card.Footer />
      </Card.Root>
    </Container>
  );
}
