/** @jsx jsx */
import { jsx, useColorMode, IconButton } from "theme-ui";

function ColorModeToggle() {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <IconButton
      aria-label="Toggle dark mode"
      onClick={() => {
        setColorMode(colorMode === "default" ? "dark" : "default");
      }}
      sx={{ cursor: "pointer" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill="currentcolor"
      >
        <circle
          r={11}
          cx={12}
          cy={12}
          fill="none"
          stroke="currentcolor"
          strokeWidth={2}
        />
      </svg>
    </IconButton>
  );
}

export default ColorModeToggle;
