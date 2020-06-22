import { useColorMode, IconButton } from "@chakra-ui/core";

export default function SwitchIcon() {
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
