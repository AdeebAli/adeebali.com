import NextLink from "next/link";
import { useColorMode } from "./ui/color-mode";
import {
  IconButton,
  Flex,
  Box,
  Icon,
  Stack,
  Text,
  Link,
  type FlexProps,
} from "@chakra-ui/react";
import { MdMenu, MdClose } from "react-icons/md";
import { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { LuMoon, LuSun } from "react-icons/lu";

const Header = (props: FlexProps) => {
  const { toggleColorMode } = useColorMode();
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);
  const [scrollPosition, setScrollPosition] = useState(0);
  const { scrollY } = useScroll();
  // Chakra v3 removed useOutsideClick; close the mobile menu on outside clicks.
  useEffect(() => {
    const handler = (event: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setShow(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setShow(false);
    setScrollPosition(latest);
  });

  return (
    <Flex
      ref={ref}
      as="nav"
      transitionDuration="0.4s"
      width="100%"
      padding={scrollPosition > 80 ? 4 : 8}
      bgGradient="to-r"
      gradientFrom="dark.shade"
      gradientTo="brand"
      color="white"
      justify="space-between"
      align="center"
      position="fixed"
      marginBottom={8}
      wrap="wrap"
      top={0}
      zIndex={100}
      {...props}
    >
      <Link color="inherit" fontSize={20} fontWeight="bold" asChild>
        <NextLink href="/">Adeeb Ali</NextLink>
      </Link>

      <Box
        display={{ base: "block", md: "none" }}
        onClick={handleToggle}
      >
        {show ? <MdClose /> : <MdMenu />}
      </Box>
      <Box
        display={{ base: show ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <Stack
          className="navItems"
          align="center"
          gap={8}
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "row", "row", "row"]}
          fontSize={17}
          pt={[4, 4, 0, 0]}
        >
          <Link color="inherit" asChild>
            <NextLink href="/">
              <Text display="block">Home</Text>
            </NextLink>
          </Link>
          <Link color="inherit" asChild>
            <NextLink href="/resume">
              <Text display="block">Resume</Text>
            </NextLink>
          </Link>
          <IconButton
            colorPalette="purple"
            aria-label="Change color mode"
            size="md"
            onClick={toggleColorMode}
          >
            {/* Icons switch via CSS so the server render matches the client. */}
            <Icon _dark={{ display: "none" }}>
              <LuMoon />
            </Icon>
            <Icon display="none" _dark={{ display: "inline-block" }}>
              <LuSun />
            </Icon>
          </IconButton>
        </Stack>
      </Box>
    </Flex>
  );
};

export default Header;
