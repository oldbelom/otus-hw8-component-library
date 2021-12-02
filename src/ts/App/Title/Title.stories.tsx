import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Title from "./Title";

export default {
  title: "Title",
  component: Title,
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;

export const H1 = Template.bind({});
H1.args = {
  dataTitleTag: "h1",
};

export const H2 = Template.bind({});
H2.args = {
  dataTitleTag: "h2",
};

export const H3 = Template.bind({});
H3.args = {
  dataTitleTag: "h3",
};

export const H4 = Template.bind({});
H4.args = {
  dataTitleTag: "h4",
};
