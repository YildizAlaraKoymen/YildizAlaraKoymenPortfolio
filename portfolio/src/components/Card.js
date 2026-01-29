import { Heading, HStack, Image, Text, VStack, Link, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, url, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.

  return (
    <VStack align="start">
      <Link href={url}>
        <Box 
          borderRadius="md" 
          overflow="hidden"
          height="350px"
          align="center"
        >
          <Image 
            src={imageSrc} 
            alt={title}
            width="100%"
            height="auto"
            objectFit="cover"
          />
        </Box>
      </Link>
      <Box px="4">
        <Text color="black">{description}</Text>
        <Link href = {url}>
          <HStack>
            <Text 
              color = "black" 
              fontWeight="bold"
            >
            See more
            </Text>
            <FontAwesomeIcon 
              color = "black" 
              icon={faArrowRight} 
              size="1x" 
            />
          </HStack>
        </Link>
      </Box>
    </VStack>
  );
};

export default Card;
