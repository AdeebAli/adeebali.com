import { Flex, Box, Link, type FlexProps } from "@chakra-ui/react";
import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineMail,
} from "react-icons/ai";

const Footer = (props: FlexProps) => {
  return (
    <Flex
      className="footer"
      align="center"
      flexDirection="column"
      height="4rem"
      width="100%"
      marginTop="auto"
      bg={{ base: "white", _dark: "black" }}
      color={{ base: "black", _dark: "white" }}
      {...props}
    >
      <Flex className="iconContainer" flexDirection="row">
        <Link href="https://www.linkedin.com/in/adeebmali" mr={1}>
          <Box
            boxSize={{ base: "26px ", sm: "32px"}}
            asChild
          >
            <AiOutlineLinkedin />
          </Box>
        </Link>
        <Link href="https://github.com/AdeebAli" mr={1}>
          <Box
            boxSize={{ base: "26px", sm: "32px" }}
            asChild
          >
            <AiOutlineGithub />
          </Box>
        </Link>
        <Link href="mailto:me@adeebali.com">
          <Box
            boxSize={{ base: "26px", sm: "32px"}}
            asChild
          >
            <AiOutlineMail />
          </Box>
        </Link>
      </Flex>
      <Flex className="copyright" color="grey.200" mt={1} fontSize={12}>
        © {new Date().getFullYear()} Adeeb Ali.
      </Flex>
    </Flex>
  );
};

export default Footer;
