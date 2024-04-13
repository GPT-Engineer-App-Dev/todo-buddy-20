import { Box, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Flex bg="blue.500" color="white" p={3} justifyContent="space-between">
      <Link as={RouterLink} to="/" px={2}>
        Home
      </Link>
      <Link as={RouterLink} to="/about" px={2}>
        About
      </Link>
    </Flex>
  );
};

export default Navbar;
