import {
  Box,
  useColorMode,
  Heading,
  Divider,
  Flex,
  IconButton,
  Spinner,
} from "@chakra-ui/core";
import Head from "next/head";
import TodoList from "../components/todo-list";
import { SSRSuspense } from "../utils/ssr-suspense";

function SwitchIcon() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      size="md"
      fontSize="lg"
      variant="ghost"
      onClick={toggleColorMode}
      icon={colorMode === "light" ? "moon" : "sun"}
    />
  );
}

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Hommie</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Box maxWidth="600px" marginX="auto" minHeight="100vh">
          <Flex alignItems="center" justifyContent="space-between" margin="4">
            <Heading as="h1" size="2xl">
              Hommie 🏠
            </Heading>
            <SwitchIcon />
          </Flex>
          <Divider />
          <SSRSuspense
            fallback={
              <Flex alignItems="center" justifyContent="center">
                <Spinner thickness="4px" size="xl" />
              </Flex>
            }
          >
            <TodoList />
          </SSRSuspense>
        </Box>
      </main>
    </div>
  );
}
