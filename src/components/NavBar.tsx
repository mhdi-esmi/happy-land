import { Box, Button, HStack, Image } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.webp";
import SearchInput from "./SearchInput";
import { FaShoppingCart } from "react-icons/fa";
import { PiShoppingCartFill } from "react-icons/pi";

import ColorModeSwitch from "./ColorModeSwitch";
import CardShopping from "./CardShopping";
import InterestShoping from "./InterestShoping";

const NavBar = () => {
  return (
    <HStack padding="10px" bg="#6B46C1" justifyContent="space-between">
      {/* <HStack> */}
      <NavLink to="/">
        <Image src={logo} boxSize="60px" fit="cover" />
      </NavLink>

      <SearchInput />
      {/* </HStack> */}

      {/* <ColorModeSwitch /> */}
      <InterestShoping />
      <CardShopping />
    </HStack>
  );
};

export default NavBar;
