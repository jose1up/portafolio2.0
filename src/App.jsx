import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Home from "./page/Home";
import { Center, Stack } from "@chakra-ui/react";
import Menu from "./components/Menu/Menu";
import ContainerProjects from "./components/Project/ContainerProjects";
import ContainerContact from "./components/Contact me/ContainerContact";
import ContainerAbout from "./components/About _me/ContainerAbout";
import SkillContainer from "./components/Skill/SkillContainer";
import Particulas from "./page/Particulas";
import Footer from "./page/Footer";

function App() {
  return (
    <Stack
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="brand.900"
    >
      <Particulas />

      <Menu />
      <Home />
      <ContainerProjects />
      <ContainerAbout />
      <SkillContainer />
      <ContainerContact />
      <Footer />
    </Stack>
  );
}

export default App;
