import { Stack, Flex, Box, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import SkillBox from "./SkillBox";

export default function Skill() {
  let baseImg = "../../../img/";
  const [SkillDB, setSkillDB] = useState([
    {
      name: "Javascript",
      src: "../../img/javascript.png"
    },
    {
      name: "SQL",
      src: "../../img/sql.png",
    },
    {
      name: "css3",
      src: "../../img/css.png",
    },
    {
      name: "redux",
      src: "../../img/redux.png",
    },
    {
      name: "node.js",
      src: "../../img/nodejs.png",
    },
    {
      name: "prisma",
      src: "../../img/prisma.png",
    },
    {
      name: "express",
      src: "../../img/express.png",
    },
    {
      name: "sequelize",
      src: "../../img/sequelize.png",
    },
    {
      name: "postgresql",
      src: "../../img/postgresql.png",
    },
    {
      name: "mysql",
      src: "../../img/mysql.png",
    },
  ]);

  console.log(SkillDB);
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
        return <SkillBox key={index} name={skill.name} src={skill.src}  />;
      })}
    </Flex>
  );
}
