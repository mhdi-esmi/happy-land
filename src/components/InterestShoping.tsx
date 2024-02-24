import { HStack, Button, Badge, Avatar, Tag, TagLabel } from "@chakra-ui/react";
import { FaRegHeart } from "react-icons/fa";
import { redirect } from "react-router-dom";

const InterestShoping = () => {
  return (
    <HStack>
      <Button variant="ghost">
        <FaRegHeart size="xs" />
        <Badge variant="subtle">4</Badge>
      </Button>
    </HStack>
  );
};

export default InterestShoping;
