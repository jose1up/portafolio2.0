import { Stack } from "@chakra-ui/react";
import React from "react";
import FormContact from "./FormContact";

export default function ContainerContact() {
  return (
    <Stack
      id="contact_me"
      h="100vh"
      display="flex"
      align="center"
      justify="center"
      m="10"
    >
      <FormContact/>
    </Stack>
  );
}
