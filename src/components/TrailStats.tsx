import type { Trail } from "@/data/trails";
import { Box, Flex, HStack, Icon, Separator, Stat } from "@chakra-ui/react";
import { FaClock, FaHiking } from "react-icons/fa";
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";

export function TrailStats({ trail }: { trail: Trail }) {
  return (
    <Flex justify="space-between" align="center" w="100%">
      <Box>
        <Stat.Root>
          <Stat.Label>Distance</Stat.Label>
          <HStack>
            <Icon as={FaHiking} color="teal.500" />
            <Stat.ValueText>
              {trail.distance}
              <Stat.ValueUnit>km</Stat.ValueUnit>
            </Stat.ValueText>
          </HStack>
        </Stat.Root>
      </Box>
      <Separator orientation="vertical" height="12" />
      <Box>
        <Stat.Root>
          <Stat.Label>Time taken</Stat.Label>
          <HStack>
            <Icon as={FaClock} color="teal.500" />
            <Stat.ValueText>
              {trail.movingTime}
              <Stat.ValueUnit>hours</Stat.ValueUnit>
            </Stat.ValueText>
          </HStack>
        </Stat.Root>
      </Box>
      <Separator orientation="vertical" height="12" />
      <Box>
        <Stat.Root>
          <Stat.Label>Elevation gain</Stat.Label>
          <HStack>
            <Icon as={HiTrendingUp} color="teal.500" />
            <Stat.ValueText>
              {trail.elevationGain}
              <Stat.ValueUnit>metres</Stat.ValueUnit>
            </Stat.ValueText>
          </HStack>
        </Stat.Root>
      </Box>
      <Separator orientation="vertical" height="12" />
      <Box>
        <Stat.Root>
          <Stat.Label>Elevation loss</Stat.Label>
          <HStack>
            <Icon as={HiTrendingDown} color="teal.500" />
            <Stat.ValueText>
              {trail.elevationLoss}
              <Stat.ValueUnit>metres</Stat.ValueUnit>
            </Stat.ValueText>
          </HStack>
        </Stat.Root>
      </Box>
    </Flex>
  );
}
