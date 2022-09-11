import { Box, Center, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import "animate.css";
import "./Home.css";

export default function Home() {
  const colorFont = useColorModeValue("whiteAlpha.900","gray.900");
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
        color={colorFont}
        fontSize="2xl"
        className="animate__animated animate__backInDown" 
      >
        Hi, I am
      </Text>
      <Text
        className="animate__animated animate__backInRight"
        fontSize="7xl"
        fontWeight="extrabold"
        color={useColorModeValue("brand.100","blue.700")}
        textShadow="dark-lg"
      >
        Jose Miguel Alcaraz
      </Text>
      <Text
        fontWeight="bold"
        color={colorFont}
        fontSize="2xl"
        className="animate__animated animate__bounceInLeft"
      >
        Developer Full Stack
      </Text>
    </Stack>
  );
}
