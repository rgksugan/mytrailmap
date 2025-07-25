import { TrailCard } from "@/components/TrailCard";
import { trails } from "@/data/trails";
import {
  Container,
  Heading,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function HikeListPage() {
  return (
    <Container py={{ base: 4, md: 8 }}>
      <Heading mb={6} size={{ base: "xl", md: "4xl", lg: "6xl" }}>
        My Trail Map
      </Heading>
      <SimpleGrid columns={{ base: 1, sm: 1, md: 2 }} columnGap={4} rowGap={4}>
        {trails.map((trail) => (
          <LinkBox key={trail.id}>
            <LinkOverlay asChild>
              <Link to={`/hike/${trail.id}`}>
                <TrailCard trail={trail} />
              </Link>
            </LinkOverlay>
          </LinkBox>
        ))}
      </SimpleGrid>
    </Container>
  );
}
