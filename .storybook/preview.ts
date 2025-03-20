import type { Preview } from "@storybook/react";
import styleWrapper from "./wrapper";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [styleWrapper],
};

export default preview;
