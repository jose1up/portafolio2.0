import { Stack } from "@chakra-ui/react";
import React from "react";
import About from "./About";

export default function ContainerAbout() {
  return (
    <Stack
      h={"100vh"}
      id="About"
      display="flex"
      align={"center"}
      justify="center"
    >
      <About />
    </Stack>
  );
}
