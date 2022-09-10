import { Stack, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import Skill from "./Skill";

export default function SkillContainer() {
    
  return (
    <Stack h="100vh" id="skill" w="98vw" pt={{ base: 12, md: 15, lg: 20 }} textAlign="center" >
        <Text fontSize={"4xl"} textTransform="capitalize" fontWeight="bold" color={useColorModeValue("whiteAlpha.900","gray.900")}>Skill</Text>
      <Skill />
    </Stack>
  );
}
