import { Box, Grid, GridItem } from "@chakra-ui/react";

import PreviewCardContiner from "../components/PreviewCardContiner";
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
      <GridItem area="main" mt={10} margin={10}>
        <PreviewCardContiner />
        <Box mt={40} ml={10} mr={10}>
          <ProductContainer />
        </Box>
      </GridItem>
      <GridItem>{/* <ProductContainer /> */}</GridItem>
    </Grid>
  );
};

export default HomePage;
