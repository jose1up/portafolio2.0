import { Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import SkillBox from "./SkillBox";

export default function Skill() {
  const [SkillDB, setSkillDB] = useState([
    {
      name: "Javascript",
      src: "./javascript.png?url",
    },
    {
      name: "SQL",
      src: "./sql.png?url",
    },
    {
      name: "css3",
      src: "./css.png?url",
    },
    {
      name: "redux",
      src: "./redux.png?url",
    },
    {
      name: "node.js",
      src: "./nodejs.png?url",
    },
    {
      name: "prisma",
      src: "./prisma.png?url",
    },
    {
      name: "express",
      src: "./express.png?url",
    },
    {
      name: "sequelize",
      src: "./sequelize.png?url",
    },
    {
      name: "postgresql",
      src: "./postgresql.png?url",
    },
    {
      name: "mysql",
      src: "./mysql.png?url",
    },
  ]);

  return (
    <Flex
      id="contact"
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
