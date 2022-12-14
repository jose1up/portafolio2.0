import {
  Flex,
  Box,
  Image,
  Text,
  Link,
  IconButton,
  useColorModeValue,
  Button,
  Tooltip,
} from "@chakra-ui/react";
import React from "react";
import photoPerfil from "../../../img/photoPerfil.jpg";
import s from "./About.module.css";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import cv from "../../../public/Desarrollado full stack José Miguel Alcaraz.pdf?url"

export default function About() {
  return (
    <Box mx="auto" rounded="lg" shadow="dark-lg" bg="gray.800" maxW="2xl">
      <Image
        roundedTop="lg"
        w="full"
        h={64}
        fit="cover"
        src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        alt="Article"
      />

      <Box p={6}>
        <Box>
          <IconButton icon={<FaQuoteLeft />} cursor={"default"} />
          <Text
            mt={2}
            fontSize="sm"
            color={useColorModeValue("whiteAlpha.900", "whiteAlpha.500")}
            className={s.span}
          >
            Hola me presento soy un desarrollador full stack MERN, actualmente
            me encuentro en búsqueda en mi primer empleo en el mundo it. Soy un
            apasionado de la tecnología como muchas ganas de empezar a demostrar
            mi conocimiento y afrontar nuevos desafíos. Estoy búsqueda de una
            empresa que me ayude a crecer tanto en lo profesional como en lo
            personal. La experiencia que tengo en este momento es académica
            desde construcción de api rest , página spa hasta aplicaciones
            móviles.Estoy cursando actualmente la carrera de ingenieria en
            informática en la universidad nacional Arturo Jauretche. y soy
            graduado de bootcamp soy henry con el título desarrollador full
            stack
          </Text>
        </Box>

        <Box mt={4}>
          <Flex alignItems="center">
            <Flex alignItems="center">
              <Image
                h={10}
                fit="cover"
                rounded="full"
                src={photoPerfil}
                alt="Avatar"
              />
              <Tooltip hasArrow label='Click download CV ' bg='gray.300' color='black'>
                <Link
                  mx={2}
                  fontWeight="bold"
                  color={useColorModeValue("whiteAlpha.900", "whiteAlpha.500")} 
                  href={cv}
                >
                  Jose Miguel Alcaraz
                </Link>
              </Tooltip>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}
