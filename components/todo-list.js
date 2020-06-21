import { Stack } from "@chakra-ui/core";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import useSWR from "swr";
import TodoItem from "./todo-item";
import fetcher from "../utils/fetcher";

export default function TodoList() {
  const { data: tasksData, mutate: mutateTasks } = useSWR(
    "/api/tasks",
    fetcher,
    { suspense: true }
  );

  function onDragEnd(result) {
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }

    mutateTasks((actualTasks) =>
      reorderList(actualTasks, result.source.index, result.destination.index)
    );
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="list">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <Stack spacing="8" margin="4">
              {tasksData.map((todo, index) => (
                <TodoItem
                  id={todo.id}
                  title={todo.title}
                  desc={todo.description}
                  index={index}
                  key={todo.id}
                />
              ))}
            </Stack>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}
