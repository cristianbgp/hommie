import {
  Box,
  useColorMode,
  Heading,
  Divider,
  Flex,
  IconButton,
} from "@chakra-ui/core";
import Head from "next/head";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import TodoList from "../components/todo-list";
import { useState } from "react";

const initial = Array.from({ length: 10 }, (v, k) => k).map((k) => {
  return {
    id: `id-${k}`,
    title: `Todo ${k}`,
    desc: `Description ${k}`,
  };
});

function reorder(list, startIndex, endIndex) {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
}

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
  const [todos, setTodos] = useState(initial);

  function onDragEnd(result) {
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }

    setTodos((actualTodos) =>
      reorder(actualTodos, result.source.index, result.destination.index)
    );
  }

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

          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="list">
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  <TodoList todos={todos} />
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </Box>
      </main>
    </div>
  );
}
