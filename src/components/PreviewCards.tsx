import { Box, Card, Image } from "@chakra-ui/react";

interface Props {
  imgsrc: string;
  w?: string;
  h?: string;
  maxW?: string;
  maxH?: string;
  mt?: number;
}

const PreviewCards = ({ imgsrc, w, h, maxH, maxW, mt }: Props) => {
  return (
    <Box
      width="fit-content"
      borderRadius={20}
      overflow="hidden"
      // justifyContent="space-between"
      _hover={{
        transform: "scale(1.05)",
        transition: "transform .16s ease-in",
      }}
      mt={mt}
    >
      <Card overflow="hidden" variant="outline">
        {/* <CardBody> */}
        <Image
          // maxW={{ base: "100%", sm: "200px" }}
          // objectFit="cover"
          w={w}
          h={h}
          maxH={maxH}
          maxW={maxW}
          src={imgsrc}
          //  boxSize="200px"
        ></Image>
        {/* </CardBody> */}
      </Card>
    </Box>
  );
};

export default PreviewCards;
