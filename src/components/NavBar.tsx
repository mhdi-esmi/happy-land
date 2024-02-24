import { Box, Button, Flex, HStack, Image, Spacer } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.webp";
import SearchInput from "./SearchInput";
import { MdLogout } from "react-icons/md";

import CardShopping from "./CardShopping";
import InterestShoping from "./InterestShoping";

const NavBar = () => {
  return (
    <HStack padding="10px" bg="#6B46C1" justifyContent="space-between">
      {/* <HStack> */}
      <NavLink to="/">
        <Image src={logo} boxSize="60px" fit="cover" />
      </NavLink>
      <Spacer />
      <Spacer />
      <Box
        bg="#ebedf0"
        borderRadius="20px"
        w="50%"
        _hover={{ bg: "#ebedf0", borderRadius: "20px" }}
        _active={{
          bg: "#dddfe2",
          transform: "scale(0.98)",
          borderColor: "#bec3c9",
          borderRadius: "20px",
        }}
        _focus={{
          boxShadow:
            "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
        }}
      >
        <SearchInput />
      </Box>
      <Spacer />

      <HStack justifyContent="space-between" spacing="20px">
        <InterestShoping />
        <CardShopping />
        <Button colorScheme="#6B46C1" rightIcon={<MdLogout />}>
          Logout
        </Button>
      </HStack>
    </HStack>
  );
};

export default NavBar;
