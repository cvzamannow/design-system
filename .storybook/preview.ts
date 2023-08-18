import type { Preview } from "@storybook/react";
import { create } from "@storybook/theming";

const lightTheme = create({
  base: "light",
  appBg: "#F9F9F9",
  colorPrimary: "#0D4A3E",
  colorSecondary: "#FFA824",
  barBg: "#F9F9F9",
  brandImage: "https://github.com/Roid-obi/logo-cvzn-ds/blob/main/CV%20Zaman%20Now-oke.png?raw=true",
});

const darkTheme = create({
  base: "dark",
  colorPrimary: "#FFA824",
  colorSecondary: "#3D6E65",
  brandImage: "https://github.com/Roid-obi/logo-cvzn-ds/blob/main/CV%20Zaman%20Now-oke.png?raw=true",
});

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    darkMode: {
      dark: darkTheme,
      light: lightTheme,
      stylePreview: true,
    }
  },
};

export default preview;
