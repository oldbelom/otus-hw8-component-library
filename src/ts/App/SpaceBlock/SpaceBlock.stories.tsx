import React from "react";
import { ComponentMeta } from "@storybook/react";

import SpaceBlock from "./SpaceBlock";

export default {
  title: "SpaceBlock",
  component: SpaceBlock,
} as ComponentMeta<typeof SpaceBlock>;

export const Default = () => <SpaceBlock />;
