import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      {/* <NavBar /> */}

      <Box padding={5}>
        <Heading>Oops...</Heading>
        <Text padding={5}>
          {isRouteErrorResponse(error)
            ? "The page does not exist"
            : "Sorry, an unexpected error has occurred."}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
