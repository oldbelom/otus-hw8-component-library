import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Dropdown from "./Dropdown";

const styles = {
  color: "green",
  fontSize: "30px",
  display: "grid",
};

export default {
  title: "Dropdown",
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

export const Default = () => <Dropdown style={styles} />;
