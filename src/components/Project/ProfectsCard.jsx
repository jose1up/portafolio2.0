import React from "react";
import {
  Text,
  Container,
  Image,
  Badge,
  Button,
  Link,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";

export default function ProfectsCard({ img, tech, url, name }) {
  return (
    <Stack
      
      w={{ base: "xs", md: "sm" }}
      h={{ base: "sm", md: "lg" }}
      bgColor="gray.900"
      borderRadius={20}
      display="flex"
      direction={"column"}
      justifyContent={"center"}
    >
      <Stack h="250" w="190" p="2" m="2">
        <Image
          src={img}
          borderRadius="xl"
          maxH={"100vh"}
          maxW={"100vw"}
          border="2px solid gray"
        />
      </Stack>
      <Container>
        <Text color="whiteAlpha.900" textTransform="capitalize" fontSize="3xl">
          {name}
        </Text>
        {tech &&
          tech.map((tech, index) => {
            return (
              <Badge
                ml="1"
                colorScheme="gray"
                color={useColorModeValue("gray.900", "whitesmoke")}
                key={index}
                borderRadius="full"
              >
                {tech}
              </Badge>
            );
          })}
      </Container>
      <Link href={url} textDecoration="none">
        <Button
          bg={useColorModeValue("blue.400", "gray.300")}
          color={useColorModeValue("whiteAlpha.900", "gray.900")}
          variant="solid"
          ml={4}
        >
          view
        </Button>
      </Link>
    </Stack>
  );
}
