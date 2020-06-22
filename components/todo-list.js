import { Stack } from "@chakra-ui/core";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import useSWR from "swr";
import TodoItem from "./todo-item";
import fetcher from "../utils/fetcher";
import reorderList from "../utils/reorder-list";

export default function TodoList() {
  const { data: tasksData, mutate: mutateTasks } = useSWR(
    "/api/tasks",
    fetcher,
    { suspense: true }
  );

  async function onDragEnd(result) {
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }

    let newTasks;

    mutateTasks((actualTasks) => {
      newTasks = reorderList(
        actualTasks,
        result.source.index,
        result.destination.index
      );
      return newTasks;
    }, false);

    newTasks.forEach(async (task, index) => {
      await fetch(`/api/tasks/${task.id}`, {
        method: "PATCH",
        body: JSON.stringify({ orderInt: index }),
      });
    });
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="list">
        {(provided) => (
          <Stack
            spacing="8"
            margin="4"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {tasksData.map((todo, index) => (
              <TodoItem
                id={todo.id}
                title={todo.title}
                desc={todo.description}
                index={index}
                key={todo.id}
              />
            ))}
            {provided.placeholder}
          </Stack>
        )}
      </Droppable>
    </DragDropContext>
  );
}
