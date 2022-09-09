import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import { Link } from "react-scroll";

export default function Footer() {

  return (
    <Box>
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
        <Stack direction={"row"} spacing={6}>
          <Link to="home" smooth={true} duration={500}>
            <Text variant={"nav"} cursor="pointer">
              Home
            </Text>
          </Link>
          <Link to="About" smooth={true} duration={500}>
            <Text variant={"nav"} cursor="pointer">
              About
            </Text>
          </Link>
          <Link to="project" smooth={true} duration={500}>
            <Text variant={"nav"} cursor="pointer">Project</Text>
          </Link>
          <Link to="skill" smooth={true} duration={500}>
            <Text variant={"nav"} cursor="pointer">
              Skills
            </Text>
          </Link>
          <Link to="contact_me" smooth={true} duration={500}>
            <Text variant={"nav"} cursor="pointer">Contact</Text>
          </Link>
        </Stack>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor="gray.200"
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text>© 2022 Jose Miguel Alcaraz. All rights reserved</Text>
          <Stack direction={"row"} spacing={6}></Stack>
        </Container>
      </Box>
    </Box>
  );
}
