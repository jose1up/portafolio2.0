import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Home from "./page/Home";
import { Center, Stack } from "@chakra-ui/react";
import Menu from "./components/Menu/Menu";
import ContainerProjects from "./components/Project/ContainerProjects";
import ContainerContact from "./components/Contact me/ContainerContact";

function App() {
  return (
    <Stack
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="brand.900"
    >
      <Menu />
      <Home />
      <ContainerProjects />
      <ContainerContact />
    </Stack>
  );
}

export default App;
