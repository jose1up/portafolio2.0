import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Stack,
  Text,
  Textarea,
  Tooltip,
  useClipboard,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { BsGithub, BsLinkedin, BsPerson, BsWhatsapp } from "react-icons/bs";
import { MdEmail, MdOutlineEmail } from "react-icons/md";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";

const confetti = {
  light: {
    primary: "4299E1", // blue.400
    secondary: "BEE3F8", // blue.100
  },

  dark: {
    primary: "1A365D", // blue.900
    secondary: "2A4365", // blue.800
  },
};

export default function FormContact() {
  const { hasCopied, onCopy } = useClipboard("josealcaraz022@gmail.com");
  const form = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, e) => {
    console.log(data);
    e.preventDefault();
    emailjs
      .sendForm(
        "service_19k9uad",
        "template_gcb0tut",
        form.current,
        "u633044fVcxZKgl2-"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Flex
      bg={useColorModeValue( "brand.600","gray.100",)}
      align="center"
      justify="center"
      id="contact"
      borderRadius="xl"
      boxShadow={"dark-lg"}
    >
      <Box
        borderRadius="lg"
        m={{ base: 5, md: 16, lg: 10 }}
        p={{ base: 5, lg: 16 }}
      >
        <Box>
          <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
            <Heading
              fontSize={{
                base: "4xl",
                md: "5xl",
              }}
              shadow="base"
            >
              Get in Touch
            </Heading>

            <Stack
              spacing={{ base: 4, md: 8, lg: 20 }}
              direction={{ base: "column", md: "row" }}
            >
              <Stack
                align="center"
                justify="space-around"
                direction={{ base: "row", md: "column" }}
              >
                <Tooltip
                  label={hasCopied ? "Email Copied!" : "Copy Email"}
                  closeOnClick={false}
                  hasArrow
                >
                  <IconButton
                    aria-label="email"
                    variant="ghost"
                    size="lg"
                    fontSize="3xl"
                    icon={<MdEmail />}
                    _hover={{
                      bg: "blue.500",
                      color: useColorModeValue("white","gray.700"),
                    }}
                    onClick={onCopy}
                    isRound
                  />
                </Tooltip>

                <Link href="https://github.com/jose1up">
                  <IconButton
                    aria-label="github"
                    variant="ghost"
                    size="lg"
                    fontSize="3xl"
                    icon={<BsGithub />}
                    _hover={{
                      bg: "blue.500",
                      color: useColorModeValue( "gray.700","white"),
                    }}
                    isRound
                  />
                </Link>

                <Link href="https://api.whatsapp.com/send?phone=5491131778590&text=Hola%20vi%20tu%20portafolio%20y%20me%20gustaria%20hablar%20con%20vos%20">
                  <IconButton
                    aria-label="twitter"
                    variant="ghost"
                    size="lg"
                    icon={<BsWhatsapp size="28px" />}
                    _hover={{
                      bg: "blue.500",
                      color: useColorModeValue("white", "gray.700"),
                    }}
                    isRound
                  />
                </Link>

                <Link href="https://www.linkedin.com/in/josemiguelalcaraz">
                  <IconButton
                    aria-label="linkedin"
                    variant="ghost"
                    size="lg"
                    icon={<BsLinkedin size="28px" />}
                    _hover={{
                      bg: "blue.500",
                      color: useColorModeValue("gray.700", "white"),
                    }}
                    isRound
                  />
                </Link>
              </Stack>

              <Box
                bg={useColorModeValue("gray.700", "white")}
                borderRadius="lg"
                p={10}
                color={useColorModeValue("whiteAlpha.900", "gray.700")}
                shadow="base"
              >
                <VStack spacing={5}>
                  <form ref={form} onSubmit={handleSubmit(onSubmit)}>
                    <FormControl>
                      <FormLabel>Name</FormLabel>

                      <InputGroup>
                        <InputLeftElement children={<BsPerson />} />
                        <Input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          {...register("name", { required: true })}
                        />
                        <Text color="red.500">
                          {errors.name?.type === "required" &&
                            " (*)Name is required"}
                        </Text>
                      </InputGroup>
                    </FormControl>

                    <FormControl>
                      <FormLabel>Email</FormLabel>

                      <InputGroup>
                        <InputLeftElement children={<MdOutlineEmail />} />
                        <Input
                          type="email"
                          name="email"
                          placeholder="Your Email"
                          {...register("email", { required: true })}
                        />
                        <Text color="red.500">
                          {errors.email?.type === "required" &&
                            " (*)Email is required"}
                        </Text>
                      </InputGroup>
                    </FormControl>

                    <FormControl>
                      <FormLabel>Message</FormLabel>

                      <Textarea
                        name="message"
                        placeholder="Your Message"
                        rows={6}
                        resize="none"
                        {...register("message", { required: true })}
                      />
                      <Text color="red.500">
                        {errors.message?.type === "required" &&
                          " (*)Message is required"}
                      </Text>
                    </FormControl>

                    <Button
                      mt={"2"}
                      type="submit"
                      colorScheme="blue"
                      bg="blue.400"
                      color="white"
                      _hover={{
                        bg: "blue.500",
                      }}
                      w="full"
                    >
                      Send Message
                    </Button>
                  </form>
                </VStack>
              </Box>
            </Stack>
          </VStack>
        </Box>
      </Box>
    </Flex>
  );
}
