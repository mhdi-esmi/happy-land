import { Badge, Button, HStack, Stack } from "@chakra-ui/react";
import { MdOutlineShoppingCart } from "react-icons/md";

const CardShopping = () => {
  return (
    <HStack>
      <Button variant="ghost">
        <MdOutlineShoppingCart size="xs" />
        <Badge variant="subtle">4</Badge>
      </Button>
    </HStack>
  );
};

export default CardShopping;
