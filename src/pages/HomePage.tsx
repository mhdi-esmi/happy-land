import { Box, Grid, GridItem } from "@chakra-ui/react";

// import PreviewCardContiner from "../components/PreviewCardContiner";
import PreviewCardContiners from "../components/PreviewCardContiner";
import ProductContainer from "../components/ProductContainer";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "1fr",
      }}
    >
      {/* <Show above="md"> */}
      <GridItem area="main" mt={10} margin={10}>
        <PreviewCardContiners />
      </GridItem>
      {/* </Show> */}
      <GridItem>
        <Box mt={40} ml={10} mr={10}>
          <ProductContainer />
        </Box>
      </GridItem>
    </Grid>
  );
};

export default HomePage;
