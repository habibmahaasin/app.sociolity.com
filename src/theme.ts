import type { ThemeConfig } from "antd";

const theme: ThemeConfig = {
  token: {
    colorPrimary: "#1677ff",
    borderRadius: 8,
    fontSize: 14,
  },
  components: {
    Button: {
      colorPrimary: "#032730",
      colorTextLightSolid: "#48E0AC",
      borderRadius: 24,
      colorPrimaryHover: "#03404f",
      colorPrimaryActive: "#03404f",
      controlHeight: 36,
    },
  },
};

export default theme;
