import { IconButton, useColorMode } from "@chakra-ui/core";
import Link from "next/link";

export default function AddTaskIcon() {
  const { colorMode } = useColorMode();
  const bgColor = { light: "black", dark: "white" };
  const color = { light: "white", dark: "gray.800" };

  return (
    <Link href="/tasks/new">
      <IconButton
        size="md"
        fontSize="lg"
        icon="add"
        backgroundColor={bgColor[colorMode]}
        color={color[colorMode]}
        borderRadius="50%"
        marginRight="4"
        _hover={{ bg: "#a0a0a0" }}
      />
    </Link>
  );
}
