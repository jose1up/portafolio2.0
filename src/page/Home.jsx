import { Box, Center, Stack, Text, Link } from "@chakra-ui/react";
import React from "react";
import "animate.css";
import "./Home.css";
import Particulas from "./Particulas";

export default function Home() {
  return (
    <Stack
      display="flex"
      alignItems="flex-start"
      justifyContent="center"
      overflow="hidden"
      h="100vh"
      pl="3"
      id="home"
    >
      <Text
        fontWeight="bold"
        color="whiteAlpha.900"
        fontSize="2xl"
        className="animate__animated animate__backInDown"
      >
        Hi, Iam
      </Text>
      <Text
        className="animate__animated animate__backInRight"
        fontSize="7xl"
        fontWeight="extrabold"
        color="brand.100"
      >
        Jose Miguel Alcaraz
      </Text>
      <Text
        fontWeight="bold"
        color="whiteAlpha.900"
        fontSize="2xl"
        className="animate__animated animate__bounceInLeft"
      >
        Developer Full Stack
      </Text>
    </Stack>
  );
}
