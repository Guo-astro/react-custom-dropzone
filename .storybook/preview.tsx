import type { Preview } from "@storybook/react";
import "../src/index.css";
import React from "react";
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    // 👇 Defining the decorator in the preview file applies it to all stories
    (Story) => {
      return <Story />;
    },
  ],
};

export default preview;
