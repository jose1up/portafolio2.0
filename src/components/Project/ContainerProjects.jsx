import { Container, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import React, { useState } from "react";
import { project } from "../../db/db";
import Carousel from "react-elastic-carousel";
import ProfectsCard from "./ProfectsCard";

export default function ContainerProjects() {
  const breakPoints = [
    { with: 1, itemsToShow: 1 },
    { with: 550, itemsToShow: 2 },
    { with: 768, itemsToShow: 3 },
    { with: 1200, itemsToShow: 4 },
  ];
  return (
    <>
      <Text id="project" textTransform="capitalize" fontSize="4xl" fontWeight="bold" color={useColorModeValue("whiteAlpha.900","gray.900")}>project | {project.length}</Text>
      <Carousel breakPoints={breakPoints} autoPlaySpeed="5000" enableAutoPlay="true"  >
        {project.map((p, index) => (
          <ProfectsCard
            key={index}
            img={p.img}
            name={p.name}
            url={p.url}
            tech={p.tech}
          />
        ))}
      </Carousel>
    </>
  );
}
