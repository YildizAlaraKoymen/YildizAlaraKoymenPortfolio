import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: yildizalarak@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/YildizAlaraKoymen",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/yildiz-alara-koymen-638909198/",
  },
];

const Header = () => {
  const headerRef = useRef(null)
  const prevScrollY = useRef(0)

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    prevScrollY.current = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const headerEl = headerRef.current;

      if (currentScrollY > prevScrollY.current) {
        headerEl.style.transform = "translateY(-200px)";
      } else {
        headerEl.style.transform = "translateY(0)";
      }
      prevScrollY.current = currentScrollY
        
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return() => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <Box
      ref = {headerRef}
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {/* Add social media links based on the `socials` data */}
            <HStack spacing={8}>
              {socials.map((child, index) => (
                <a
                  key = {index}
                  href = {child.url}
                >
                  <FontAwesomeIcon icon={child.icon} size={"2x"}/>
                </a>
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
              <a
                href="#contact-me"
                onClick={handleClick(`contactme`)}
              >
                <h3>Contact Me</h3>
              </a>
              <a
                href="#projects"
                onClick={handleClick(`projects`)}
              >
                <h3>Projects</h3>
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
