import { Grid, GridItem } from "@chakra-ui/react";
import PreviewCards from "./PreviewCards";
// import photo1 from "../assets/1.webp";
import photo2 from "../assets/2.webp";
import photo3 from "../assets/3.webp";
import photo4 from "../assets/4.webp";
// import photo5 from "../assets/5.webp";
// import photo6 from "../assets/6.webp";
import photo7 from "../assets/7.webp";
import photo8 from "../assets/8.webp";
import photo9 from "../assets/9.webp";
interface Props {
  bg?: string;
}
const PreviewCardContiner = ({ bg }: Props) => {
  return (
    <Grid
      // h="800px"
      // w="100%"
      templateRows={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
      templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(4, 1fr)" }}
      gap={3}
    >
      <GridItem rowSpan={1} colSpan={1} bg={bg}>
        <PreviewCards imgsrc={photo7} w="406px" h="261px" />
      </GridItem>

      <GridItem rowSpan={2} colSpan={2} bg={bg}>
        <PreviewCards imgsrc={photo9} w="820px" h="521px" />
      </GridItem>

      <GridItem rowSpan={1} colSpan={1} bg={bg}>
        <PreviewCards imgsrc={photo2} w="406px" h="262px" />
      </GridItem>
      <GridItem rowSpan={2} colSpan={1} bg={bg}>
        <PreviewCards imgsrc={photo8} w="406px" h="528px" />
      </GridItem>
      <GridItem rowSpan={2} colSpan={1} bg={bg}>
        <PreviewCards imgsrc={photo8} w="406px" h="528px" />
      </GridItem>
      <GridItem rowSpan={1} colSpan={1} bg={bg}>
        <PreviewCards imgsrc={photo4} w="406px" h="260px" />
      </GridItem>
      <GridItem rowSpan={1} colSpan={1} bg={bg}>
        <PreviewCards imgsrc={photo3} w="406px" h="260px" />
      </GridItem>
    </Grid>
  );
};

export default PreviewCardContiner;
