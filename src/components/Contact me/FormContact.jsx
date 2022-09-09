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
  useToast,
  VStack,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { BsGithub, BsLinkedin, BsPerson, BsWhatsapp } from "react-icons/bs";
import { MdEmail, MdOutlineEmail } from "react-icons/md";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
const serviceID = import.meta.env.VITE_SERVICE_ID_EMAIL_JS;
const templateID = import.meta.env.VITE_TEMPLATE_ID_EMAIL_JS;
const templateParams = import.meta.env.VITE_TEMPLATE_PARAMS_EMAIL_JS;

export default function FormContact() {
  const { hasCopied, onCopy } = useClipboard("josealcaraz022@gmail.com");
  const form = useRef();
  const toast = useToast();
  const colorIcon = useColorModeValue("whiteAlpha.900", "gray.900");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, e) => {
    console.log(data);
    e.preventDefault();
    emailjs.sendForm(serviceID, templateID, form.current, templateParams).then(
      (result) => {
        toast({
          title: "Send Message",
          description: "We're sending your message with success.",
          status: "success",
          duration: 8000,
          isClosable: true,
        });
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <Flex
      bg="brand.600"
      align="center"
      justify="center"
      id="contact"
      // borderRadius="xl"
      // boxShadow={"dark-lg"}
      mt="15"
      mb="15"
    >
      <Box
        borderRadius="lg"
        m={{ base: 5, md: 12, lg: 8 }}
        p={{ base: 5, lg: 7.5 }}
      >
        <Box>
          <VStack spacing={{ base: 2, md: 4, lg: 7 }}>
            <Heading
              fontSize={{
                base: "4xl",
                md: "5xl",
              }}
              fontWeight="extrabold"
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
                      color: "while",
                    }}
                    color={colorIcon}
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
                      color: "gray.700",
                    }}
                    color={colorIcon}
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
                      color: "gray.700",
                    }}
                    color={colorIcon}
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
                      color: "while",
                    }}
                    color={colorIcon}
                    isRound
                  />
                </Link>
              </Stack>

              <Box
                bg={"gray.700"}
                borderRadius="lg"
                p={10}
                color={"while"}
                shadow="dark-lg"
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
