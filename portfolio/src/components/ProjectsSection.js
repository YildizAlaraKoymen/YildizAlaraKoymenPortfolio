import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "DynaZOR",
    description:
      "DynaZOR is a cloud-based scheduling and rendezvous system designed to automate appointment management between users. The goal is to eliminate manual scheduling errors and reduce communication delays by using AWS services for storing data and notifications.",
    url: "https://github.com/YildizAlaraKoymen/DynaZOR",
    getImageSrc: () => require("../images/photo1.png"),
  },
  {
    title: "Human Activity Recognition (HAR) System",
    description:
      "(In progress, graduation project) Edge-computable Human Activity Recognition system built with wearable IMU sensors, a Raspberry Pi hub, a mobile Activity Labeling App, and a Unity-based visualisation environment.",
    url: "https://github.com/YildizAlaraKoymen",
    getImageSrc: () => require("../images/photo2.png"),
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Box 
            key={project.title}
            bg="white"
            borderRadius="md"
            height="500px"
          >
            <Card
              title={project.title}
              description={project.description}
              url={project.url}
              imageSrc={project.getImageSrc()}
            />
          </Box>
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
