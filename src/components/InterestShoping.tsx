import { Badge, Button, HStack } from "@chakra-ui/react";
import { FaRegHeart } from "react-icons/fa";

const InterestShoping = () => {
  return (
    <HStack>
      <Button variant="ghost" size="sm">
        <FaRegHeart size="xs" />
        <Badge variant="subtle">4</Badge>
      </Button>
    </HStack>
  );
};

export default InterestShoping;
