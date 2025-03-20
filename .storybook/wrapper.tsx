import React from "react";
import { ConfigProvider } from "antd";
import theme from "../src/theme";
import "../src/styles/index.css";

const styleWrapper = (Story: any) => (
  <ConfigProvider theme={theme}>
    <Story />
  </ConfigProvider>
);

export default styleWrapper;
