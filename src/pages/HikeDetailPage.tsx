import { hikes } from "@/data/trails";
import {
  Breadcrumb,
  Card,
  Container,
  Heading,
  Link,
  Stat,
  Tag,
  Wrap,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";

export default function HikeDetailPage() {
  const { id } = useParams();
  const hike = hikes.find((h) => h.id === id);

  if (!hike) {
    return (
      <Container py={8}>
        <Heading>Hike Not Found</Heading>
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
            <Breadcrumb.CurrentLink>{hike.title}</Breadcrumb.CurrentLink>
          </Breadcrumb.Item>
        </Breadcrumb.List>
      </Breadcrumb.Root>
      <Card.Root mt="5">
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
    </Container>
  );
}
