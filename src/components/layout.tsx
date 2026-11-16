import { Box, Flex } from "@chakra-ui/react";
import Header from "./header";
import Footer from "./footer";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Header />
      <Flex
        as="main"
        flex={1}
        marginTop={"94px"}
        bg={{ base: "white", _dark: "black" }}
        color={{ base: "black", _dark: "white" }}
        paddingBottom={{ base: 4 , md: 8}}
      >
        {children}
      </Flex>
      <Footer />
    </Box>
  );
};

export default Layout;
