import { Badge, Button, HStack, Icon } from "@chakra-ui/react";
import { MdOutlineShoppingCart } from "react-icons/md";

const CardShopping = () => {
  return (
    <HStack>
      <Button variant="ghost">
        <Icon as={MdOutlineShoppingCart} boxSize={8} />
        <Badge variant="subtle">4</Badge>
      </Button>
    </HStack>
  );
};

export default CardShopping;
