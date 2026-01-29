import React from "react";
import { Avatar, Heading, VStack, Box } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Alara!";
const bio1 = "A software engineering candidate";
const avatar = () => require("../images/photo3.jpg");

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack>
        <Box boxSize="160px" overflow="hidden" borderRadius="full">
          <Avatar src={ avatar() } boxSize="100%" />
        </Box>
        <Heading size="sm">{ greeting }</Heading>
      </VStack>
    <VStack padding= "10">
      <Heading size="2xl">{ bio1 }</Heading>
    </VStack>

  </FullScreenSection>
);

export default LandingSection;
