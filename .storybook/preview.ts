import type { Preview } from "@storybook/react";
import { create } from "@storybook/theming";

const lightTheme = create({
  base: "light",
  appBg: "#FFFBEB",
  colorPrimary: "#0D4A3E",
  colorSecondary: "#34D399",
  barBg: "#FFFBEB",
  appBorderRadius: 8,
  appBorderColor: '#FFA824',
  brandImage: "https://github.com/Roid-obi/logo-cvzn-ds/blob/main/front-end-cvzn.png?raw=true",
  brandTitle: 'CV Zaman Now',
});

const darkTheme = create({
  base: "dark",
  colorPrimary: "#FFA824",
  colorSecondary: "#3D6E65",
  appBorderRadius: 8,
  appBorderColor: '#3D6E65',
  brandImage: "https://github.com/Roid-obi/logo-cvzn-ds/blob/main/front-end-cvzn.png?raw=true",
  brandTitle: 'CV Zaman Now',
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
