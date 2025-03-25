import React from "react";
import "../src/styles/index.css";

const styleWrapper = (Story: React.ComponentType) => (
  <main className="sociolity-light">
    <Story />
  </main>
);

export default styleWrapper;
