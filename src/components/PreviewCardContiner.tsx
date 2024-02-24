import { Grid, GridItem, HStack } from "@chakra-ui/react";
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
interface Props {
  bg?: string;
}
const PreviewCardContiner = ({ bg }: Props) => {
  return (
    <Grid
      h="800px"
      // w="100%"
      templateRows="repeat(4, 1fr)"
      templateColumns="repeat(4, 1fr)"
      gap={2}
    >
      <GridItem rowSpan={1} colSpan={1} boxSize="fit-content" bg={bg}>
        <PreviewCards imgsrc={photo7} w="500px" maxH="200px" />
        <PreviewCards imgsrc={photo8} w="400px" h="600px" mt={2} />
      </GridItem>

      <GridItem rowSpan={1} colSpan={2} ml={3} bg={bg}>
        <PreviewCards imgsrc={photo9} h="450px" w="800px" />
        <HStack>
          <PreviewCards imgsrc={photo4} w="400px" h="350px" mt={4} />
          <PreviewCards imgsrc={photo3} w="400px" h="350px" mt={4} />
        </HStack>
      </GridItem>

      <GridItem rowSpan={1} colSpan={1} ml={2} bg={bg}>
        <PreviewCards imgsrc={photo8} w="400px" h="600px" />
        <PreviewCards imgsrc={photo2} maxH="200px" w="500px" mt={2} />
      </GridItem>
    </Grid>
  );
};

export default PreviewCardContiner;
