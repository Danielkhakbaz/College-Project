import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { Theme } from "themes/theme";
import { DataProvider } from "providers/data/data-provider";
import { StepProvider } from "providers/step/step-provider";
import { Compose } from "utils/compose/compose";
import Layout from "layout/layout";
import App from "src/App";
import "styles/_app.css";
import "styles/chakra_overriden.css";
import "styles/chakra-datepicker.css";
import "styles/landing.css";

const Providers = [DataProvider, StepProvider];

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={Theme}>
      <Compose providers={Providers}>
        <Suspense fallback={<div>Loading...</div>}>
          <Layout>
            <App />
          </Layout>
        </Suspense>
      </Compose>
    </ChakraProvider>
  </React.StrictMode>
);
