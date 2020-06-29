import { useState } from "react";
import { Box, Text, useColorMode, Checkbox, IconButton } from "@chakra-ui/core";
import { Draggable } from "react-beautiful-dnd";

export default function TodoItem({
  id,
  title,
  desc,
  finished,
  index,
  mutateTasks,
  ...rest
}) {
  const [checkboxValue, setCheckboxValue] = useState(finished);
  const [disableCheckbox, setDisableCheckbox] = useState(false);
  const [disableDelete, setDisableDelete] = useState(false);
  const { colorMode } = useColorMode();
  const bgColor = { light: "white", dark: "gray.800" };
  const color = { light: "black", dark: "white" };

  function handleCheckbox(event) {
    setDisableCheckbox(true);
    fetch(`/api/tasks/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ finished: event.target.checked }),
    }).then(() => {
      setDisableCheckbox(false);
      setCheckboxValue((actualCheckboxValue) => !actualCheckboxValue);
    });
  }

  function handleDelete() {
    setDisableDelete(true);
    fetch(`/api/tasks/${id}`, {
      method: "DELETE",
    }).then(() => {
      setDisableDelete(false);
      mutateTasks();
    });
  }

  return (
    <Draggable draggableId={id.toString()} index={index}>
      {(provided) => (
        <Box
          padding="5"
          shadow="md"
          borderWidth="1px"
          rounded="lg"
          backgroundColor={bgColor[colorMode]}
          position="relative"
          {...rest}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Checkbox
            variantColor="gray"
            size="xl"
            fontWeight="bold"
            onChange={handleCheckbox}
            isChecked={checkboxValue}
            isDisabled={disableCheckbox}
          >
            {title}
          </Checkbox>
          {desc && (
            <Text marginTop={4} color={color[colorMode]}>
              {desc}
            </Text>
          )}
          <IconButton
            size="sm"
            fontSize="lg"
            icon="delete"
            variantColor="gray"
            position="absolute"
            top="5"
            right="5"
            isDisabled={disableDelete}
            onClick={handleDelete}
          />
        </Box>
      )}
    </Draggable>
  );
}
