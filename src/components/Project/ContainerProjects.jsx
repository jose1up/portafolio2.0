import { Container, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { project } from "../../db/db";

export default function ContainerProjects() {
  const [items, setitems] = useState([
    { id: 1, title: "item #1" },
    { id: 2, title: "item #2" },
    { id: 3, title: "item #3" },
    { id: 4, title: "item #4" },
    { id: 5, title: "item #5" },
  ]);
  console.log(items);

  return <Stack></Stack>;
}
