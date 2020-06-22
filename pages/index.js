import { Flex, Spinner } from "@chakra-ui/core";
import { SSRSuspense } from "../utils/ssr-suspense";
import TodoList from "../components/todo-list";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <SSRSuspense
        fallback={
          <Flex alignItems="center" justifyContent="center" margin="4">
            <Spinner thickness="4px" size="xl" />
          </Flex>
        }
      >
        <TodoList />
      </SSRSuspense>
    </Layout>
  );
}
