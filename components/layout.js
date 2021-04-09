import Head from "next/head";
import { Box, Flex, Heading, Divider, Button, Icon } from "@chakra-ui/core";
import AddTaskIcon from "./add-task-icon";
import SwitchIcon from "./switch-icon";
import Link from "next/link";

export default function Layout({
  children,
  title = "Hommie",
  description = "Another ToDo app",
  url = "https://hommie.vercel.app/",
}) {
  const image = `${url}open-graph.png`;
  return (
    <div className="container">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:title" content={title} key="og:title" />
        <meta
          property="og:description"
          content={description}
          key="og:description"
        />
        <meta property="og:image" content={image} key="og:image" />
        <meta
          property="og:image:alt"
          content={description}
          key="og:image:alt "
        />
        <meta property="og:url" content={url} key="og:url" />
        <meta property="og:site_name" content={title} key="og:site_name" />
        <meta property="og:locale" content="en" key="og:locale" />
        <meta
          name="twitter:card"
          content="summary_large_image"
          key="twitter:card"
        />
        <meta name="twitter:site" content="@cristianbgp" key="twitter:site" />
        <meta
          name="twitter:creator"
          content="@cristianbgp"
          key="twitter:creator"
        />
        <meta name="twitter:url" content={url} key="twitter:url" />
        <meta name="twitter:title" content={title} key="twitter:title" />
        <meta
          name="twitter:description"
          content={description}
          key="twitter:description"
        />
        <meta name="twitter:image" content={image} key="twitter:image" />
        <meta
          name="twitter:summary"
          content={description}
          key="twitter:summary"
        />
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
