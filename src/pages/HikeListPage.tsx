import { TrailCard } from "@/components/TrailCard";
import { trails } from "@/data/trails";
import {
  Container,
  Heading,
  LinkBox,
  LinkOverlay,
  Portal,
  Select,
  SimpleGrid,
  createListCollection,
} from "@chakra-ui/react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

export default function HikeListPage() {
  const [selectedTag, setSelectedTag] = useState("");

  const allTags = useMemo(() => {
    const tagCounts = new Map<string, number>();
    trails.forEach((trail) => {
      trail.tags.forEach((tag) => {
        tagCounts.set(tag, (tagCounts.get(tag) || 0) + 1);
      });
    });
    const tags = Array.from(tagCounts.keys()).sort();
    return createListCollection({
      items: tags.map((tag) => ({
        label: `${tag} (${tagCounts.get(tag)})`,
        value: tag,
      })),
    });
  }, []);

  const filteredTrails = useMemo(() => {
    if (!selectedTag) return trails;
    return trails.filter((trail) => trail.tags.includes(selectedTag));
  }, [selectedTag]);

  return (
    <Container py={{ base: 4, md: 8 }}>
      <Heading mb={6} size={{ base: "xl", md: "4xl", lg: "6xl" }}>
        My Trail Map
      </Heading>
      <Select.Root
        collection={allTags}
        value={[selectedTag]}
        onValueChange={(details) => setSelectedTag(details.value[0] || "")}
        w={{ base: "100%", md: "300px" }}
        mb={6}
      >
        <Select.Control>
          <Select.Trigger>
            <Select.ValueText placeholder="Filter by tag" />
          </Select.Trigger>
          <Select.IndicatorGroup>
            <Select.Indicator />
          </Select.IndicatorGroup>
        </Select.Control>
        <Portal>
          <Select.Positioner>
            <Select.Content>
              {allTags.items.map((tag) => (
                <Select.Item item={tag} key={tag.value}>
                  <Select.ItemText>{tag.label}</Select.ItemText>
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Positioner>
        </Portal>
      </Select.Root>
      <SimpleGrid columns={{ base: 1, sm: 1, md: 2 }} columnGap={4} rowGap={4}>
        {filteredTrails.map((trail) => (
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
