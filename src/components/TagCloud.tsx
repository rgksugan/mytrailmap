import { trails } from "@/data/trails";
import { Badge, Flex } from "@chakra-ui/react";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

export function TagCloud() {
  const navigate = useNavigate();

  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    trails.forEach((trail) => {
      trail.tags.forEach((tag) => tagSet.add(tag));
    });
    return Array.from(tagSet).sort();
  }, []);

  const handleTagClick = (tag: string) => {
    navigate(`/?tag=${encodeURIComponent(tag)}`);
  };

  return (
    <Flex wrap="wrap" gap={2}>
      {allTags.map((tag) => (
        <Badge
          key={tag}
          colorPalette="teal"
          cursor="pointer"
          onClick={() => handleTagClick(tag)}
          _hover={{ bg: "teal.600", color: "white" }}
        >
          {tag}
        </Badge>
      ))}
    </Flex>
  );
}