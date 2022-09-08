import React, { useId } from "react";
import {
  Box,
  Container,
  Link,
  Heading,
  Image,
  Badge,
  Button,
  Stack,
} from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";

export default function ProfectsCard({ img, tech, url,name }) {
  return (
    <Stack
      w={{ base: "xs", md: "sm" }}
      h={{ base: "xs", md: "sm" }}
      bgColor="brand.800"
      borderRadius={20}
      m="2"
      overflow={"clip"}
      display="flex"
    >
      <Container>
        <Image src={img} borderRadius="lg" />
      </Container>
      <Container>
        <Heading
          as="h2"
          color="whiteAlpha.900"
          textTransform="capitalize"
          fontFamily="Teko, sans-serif"
        >
          {name}
        </Heading>
        {tech &&
          tech.map((tech) => {
            return (
              <Badge
                ml="1"
                colorScheme="orange"
                color="brand.100"
                key={uuidv4()}
              >
                {tech}
              </Badge>
            );
          })}
      </Container>
      <Button
        colorScheme="orange"
        m="3"
        p="3"
        onClick={() => console.log(url)}
        _hover={{ bg: "brand.100" }}
      >
        view
      </Button>
    </Stack>
  );
}
