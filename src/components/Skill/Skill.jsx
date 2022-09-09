import { Stack, Flex, Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { SkillDB } from "../../db/db";
import SkillBox from "./SkillBox";

export default function Skill() {
  console.log(SkillBox.length);
  return (
    <Flex
      id="contact"
      bg="brand.600"
      alignItems="center"
      direction={"column"}
      justifyContent="flex-start"
      overflow="auto"
      wrap="wrap"
      h="80vh"
      pt="10"
      pr={"5"}
      pb="10"
    >
      {SkillDB.map((skill, index) => {
        return <SkillBox key={index} name={skill.name} src={skill.src} />;
      })}
    </Flex>
  );
}
