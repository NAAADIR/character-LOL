import { ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import AppContainer from "../components/AppContainer";
import "../styles/index.css";
import { theme } from "../theme/chakra";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <AnimatePresence mode="wait">
        <AppContainer>
          <Component {...pageProps} />
        </AppContainer>
      </AnimatePresence>
    </ChakraProvider>
  );
}
