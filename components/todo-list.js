import { Stack } from "@chakra-ui/core";
import TodoItem from "./todo-item";

export default function TodoList({ todos }) {
  return (
    <Stack spacing="8" margin="4">
      {todos.map((todo, index) => (
        <TodoItem
          id={todo.id}
          title={todo.title}
          desc={todo.desc}
          index={index}
          key={todo.id}
        />
      ))}
    </Stack>
  );
}
