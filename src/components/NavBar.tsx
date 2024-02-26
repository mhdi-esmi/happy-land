import { Box, Button, HStack, Image } from "@chakra-ui/react";
import { MdLogout } from "react-icons/md";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.webp";
import SearchInput from "./SearchInput";

import CardShopping from "./CardShopping";
import InterestShoping from "./InterestShoping";

const NavBar = () => {
  return (
    <HStack
      as="nav"
      p={{ bas: "2px", md: "10px" }}
      bg="#6B46C1"
      justifyContent="space-between"
    >
      <NavLink to="/">
        <Image src={logo} boxSize="60px" fit="cover" />
      </NavLink>
      {/* <Spacer /> */}
      <Box
        // ml="200px"
        bg="#ebedf0"
        borderRadius="10px"
        w="50%"
        _hover={{ bg: "#ebedf0", borderRadius: "10px" }}
        _active={{
          bg: "#dddfe2",
          transform: "scale(0.98)",
          borderColor: "#ebedf0",
          borderRadius: "10px",
        }}
        _focus={{
          boxShadow:
            "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
        }}
      >
        <SearchInput />
      </Box>
      {/* <Spacer /> */}

      <HStack justifyContent="space-between">
        <InterestShoping />
        <CardShopping />
        <Button
          colorScheme="#6B46C1"
          rightIcon={<MdLogout />}
          fontWeight={{ base: "12px" }}
        >
          Logout
        </Button>
      </HStack>
    </HStack>
  );
};

export default NavBar;
