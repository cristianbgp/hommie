import Head from "next/head";
import { Box, Flex, Heading, Divider, Button, Icon } from "@chakra-ui/core";
import AddTaskIcon from "./add-task-icon";
import SwitchIcon from "./switch-icon";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="container">
      <Head>
        <title>Hommie</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Box maxWidth="600px" marginX="auto" minHeight="100vh">
          <Flex alignItems="center" justifyContent="space-between" padding="4">
            <Link href="/">
              <Button size="2xl" variant="ghost" padding="2">
                <Heading as="h1" size="2xl">
                  Hommie
                </Heading>
                <Icon name="icon-hommie" size="3em" marginLeft="4" />
              </Button>
            </Link>
            <Flex alignItems="center" justifyContent="space-between">
              <AddTaskIcon />
              <SwitchIcon />
            </Flex>
          </Flex>
          <Divider />
          {children}
        </Box>
      </main>
    </div>
  );
}
