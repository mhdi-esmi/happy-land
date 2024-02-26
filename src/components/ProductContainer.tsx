import { HStack } from "@chakra-ui/react";
import photo1 from "../assets/1.webp";
import photo2 from "../assets/2.webp";
import photo3 from "../assets/3.webp";
import photo4 from "../assets/4.webp";
import photo5 from "../assets/5.webp";
import photo6 from "../assets/6.webp";
import photo7 from "../assets/7.webp";
import photo8 from "../assets/8.webp";
import photo9 from "../assets/9.webp";
import PreviewCards from "./PreviewCards";
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
  const handleScroll = (event: any) => {
    const container = event.target;
    const scrollAmount = event.deltaY;
    container.scrollTo({
      top: 0,
      left: container.scrollLeft + scrollAmount,
      behavior: "smooth",
    });
  };
  return (
    <HStack className="HScroll" onWheel={handleScroll}>
      {productList.map((p, index) => (
        <div className="item" key={index}>
          <PreviewCards imgsrc={p} w="fit-content"></PreviewCards>
        </div>
      ))}
    </HStack>
  );
};

export default ProductContainer;
