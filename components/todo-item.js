import { Box, Heading, Text, useColorMode } from "@chakra-ui/core";
import { Draggable } from "react-beautiful-dnd";

export default function TodoItem({ id, title, desc, index, ...rest }) {
  const { colorMode } = useColorMode();
  const bgColor = { light: "white", dark: "gray.800" };
  const color = { light: "black", dark: "white" };

  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <Box
          padding="5"
          shadow="md"
          borderWidth="1px"
          rounded="lg"
          backgroundColor={bgColor[colorMode]}
          {...rest}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Heading fontSize="xl" color={color[colorMode]}>
            {title}
          </Heading>
          <Text marginTop={4} color={color[colorMode]}>
            {desc}
          </Text>
        </Box>
      )}
    </Draggable>
  );
}
