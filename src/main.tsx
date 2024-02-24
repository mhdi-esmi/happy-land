import { ChakraProvider, theme } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./routes.tsx";
// import theme from "./theme";

ReactDOM.createRoot(document.getElementById("root")!).render(
  //   {/* <ChakraProvider theme={theme}> */}
  // {/* <ColorModeScript initialColorMode={theme.config.initialColorMode} /> */}

  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
