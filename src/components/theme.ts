import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

// Color mode (v2 `initialColorMode` / `useSystemColorMode`) is now handled by
// next-themes in ./ui/color-mode, which follows the system setting by default.

const config = defineConfig({
  theme: {
    breakpoints: {
      sm: "30em",
      md: "48em",
      lg: "62em",
      xl: "80em",
    },
    tokens: {
      colors: {
        black: { value: "#000" },
        white: { value: "#fff" },
        grey: { value: "#BEBEBE" },
        brand: { value: "#511479" },
        dark: {
          accent: { value: "#746F94" },
          shade: { value: "#1B2234" },
        },
        light: {
          accent: { value: "#6B93C1" },
          shade: { value: "#F1EEEC" },
        },
      },
    },
    // Resolved in CSS per color mode, so server-rendered HTML is correct
    // before next-themes knows the visitor's mode.
    semanticTokens: {
      colors: {
        shade: {
          value: { base: "{colors.light.shade}", _dark: "{colors.dark.shade}" },
        },
        accent: {
          value: { base: "{colors.dark.accent}", _dark: "{colors.light.accent}" },
        },
        mutedText: {
          value: {
            base: "{colors.blackAlpha.600}",
            _dark: "{colors.whiteAlpha.600}",
          },
        },
      },
    },
  },
});

const customTheme = createSystem(defaultConfig, config);

export default customTheme;
