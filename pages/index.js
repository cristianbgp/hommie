import {
  Stack,
  Box,
  useColorMode,
  Heading,
  Divider,
  Flex,
  IconButton,
  Text
} from "@chakra-ui/core";
import Head from "next/head";

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

function TodoItem({ title, desc, ...rest }) {
  return (
    <Box padding="5" shadow="md" borderWidth="1px" {...rest}>
      <Heading fontSize="xl">{title}</Heading>
      <Text marginTop={4}>{desc}</Text>
    </Box>
  );
}

function TodoList() {
  return (
    <Stack spacing="8" margin="4">
      <TodoItem
        title="Plan Money"
        desc="The future can be even brighter but a goal without a plan is just a wish"
      />
      <TodoItem
        title="Save Money"
        desc="You deserve good things. With a whooping 10-15% interest rate per annum, grow your savings on your own terms with our completely automated process"
      />
      <TodoItem
        title="Plan Money"
        desc="The future can be even brighter but a goal without a plan is just a wish"
      />
      <TodoItem
        title="Save Money"
        desc="You deserve good things. With a whooping 10-15% interest rate per annum, grow your savings on your own terms with our completely automated process"
      />
      <TodoItem
        title="Plan Money"
        desc="The future can be even brighter but a goal without a plan is just a wish"
      />
      <TodoItem
        title="Save Money"
        desc="You deserve good things. With a whooping 10-15% interest rate per annum, grow your savings on your own terms with our completely automated process"
      />
    </Stack>
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
          <TodoList />
        </Box>
      </main>
    </div>
  );
}
