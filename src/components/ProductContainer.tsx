import { Box, Flex, GridItem, HStack, SimpleGrid } from "@chakra-ui/react";
import PreviewCards from "./PreviewCards";
import photo1 from "../assets/1.webp";
import photo2 from "../assets/2.webp";
import photo3 from "../assets/3.webp";
import photo4 from "../assets/4.webp";
import photo5 from "../assets/5.webp";
import photo6 from "../assets/6.webp";
import photo7 from "../assets/7.webp";
import photo8 from "../assets/8.webp";
import photo9 from "../assets/9.webp";
const ProductContainer = () => {
  const productList = [
    photo1,
    photo2,
    photo3,
    photo4,
    photo5,
    photo6,
    photo7,
    photo8,
    photo9,
  ];
  return (
    <HStack>
      {productList.map((p) => (
        <PreviewCards h="200px" w="400px" imgsrc={p}></PreviewCards>
      ))}
    </HStack>
  );
};

export default ProductContainer;
