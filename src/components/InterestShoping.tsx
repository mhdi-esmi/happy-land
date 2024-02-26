import { Badge, Button, HStack, Icon } from "@chakra-ui/react";
import { FaRegHeart } from "react-icons/fa";

const InterestShoping = () => {
  return (
    <HStack>
      <Button variant="ghost" size="sm">
        <Icon as={FaRegHeart} boxSize={8} />
        <Badge variant="subtle">4</Badge>
      </Button>
    </HStack>
  );
};

export default InterestShoping;
