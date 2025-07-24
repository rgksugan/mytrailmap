import { TrailStats } from "@/components/TrailStats";
import { trails } from "@/data/trails";
import {
  Breadcrumb,
  Card,
  Container,
  Heading,
  HStack,
  Icon,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FiMapPin } from "react-icons/fi";
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
      <Stack>
        <Heading size="5xl">{trail.title}</Heading>
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
    </Container>
  );
}
