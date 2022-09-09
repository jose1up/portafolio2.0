import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
  Stack,
  IconButton,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Icon,
  Text,
  Center,
  Box,
  VStack,
  Flex,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-scroll";
import React from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
export default function Menu() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Stack position="fixed" m="2" right="0" top="0" zIndex="1">
      <IconButton
        icon={<HamburgerIcon />}
        ref={btnRef}
        onClick={onOpen}
        colorScheme="telegram"
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerContent>
          <DrawerHeader
            size="xs"
            bgColor={useColorModeValue("brand.900", "gray.700")}
          >
            <DrawerCloseButton
              m={2.5}
              color="whiteAlpha.900"
              fontSize="20"
              _hover={{ fontSize: "2xl" }}
            />
            {colorMode === "light" ? (
              <IconButton icon={<SunIcon />} onClick={toggleColorMode} />
            ) : (
              <IconButton icon={<MoonIcon />} onClick={toggleColorMode} />
            )}
          </DrawerHeader>
          <DrawerBody
            bgColor={useColorModeValue("brand.900", "gray.700")}
            pt="28"
          >
            <VStack textAlign="center">
              <Link to="home" smooth={true} duration={500}>
                <Text
                  variant="nav"
                  fontSize="4xl"
                  color="whiteAlpha.900"
                  cursor="pointer"
                  // _hover={{ color: "brand.100", fontSize: "5xl" }}
                >
                  Home
                </Text>
              </Link>
              <Link to="project" smooth={true} duration={500}>
                <Text
                  variant="nav"
                  fontSize="4xl"
                  color="whiteAlpha.900"
                  cursor="pointer"
                  // _hover={{ color: "brand.100", fontSize: "5xl" }}
                >
                  Project
                </Text>
              </Link>
              <Link to="About" smooth={true} duration={500}>
                <Text
                  fontSize="4xl"
                  color="whiteAlpha.900"
                  cursor="pointer"
                  _hover={{ color: "brand.100", fontSize: "5xl" }}
                >
                  About me
                </Text>
              </Link>
              <Link to="skill" smooth={true} duration={500}>
                <Text
                  fontSize="4xl"
                  color="whiteAlpha.900"
                  cursor="pointer"
                  _hover={{ color: "brand.100", fontSize: "5xl" }}
                >
                  Skill
                </Text>
              </Link>
              <Link to="contact_me" smooth={true} duration={500}>
                <Text
                  fontSize="4xl"
                  color="whiteAlpha.900"
                  cursor="pointer"
                  _hover={{ color: "brand.100", fontSize: "5xl" }}
                >
                  Contact me
                </Text>
              </Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Stack>
  );
}
