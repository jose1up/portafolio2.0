import React from "react";
import { Text, Image, Box } from "@chakra-ui/react";

export default function SkillBox({ name, src }) {
  return (
    <Box
      p="2"
      m="2"
      display="flex"
      direction="row"
      alignItems="center"
      justifyContent="center"
      borderRadius="full"
      border="2px solid gray.700"
      boxShadow="dark-lg"
      overflowX={"initial"}
      bgColor="gray.200"
      w={"2xs"}
      minW={"auto"}
    >
      <Image src={src} borderRadius="md" />
      <Text
        ml={"2"}
        fontSize={{ base: "sm", md: "2xl" }}
        fontWeight="bold"
        color="gray.700"
        textShadow={"lg"}
      >
        {name}
      </Text>
    </Box>
  );
}
