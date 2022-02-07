import React from "react";

import Paragraph from "./Paragraph/Paragraph";
import SpaceBlock from "./SpaceBlock/SpaceBlock";
import Title from "./Title/Title";
import Dropdown from "./Dropdown/Dropdown";
import Columns from "./Columns/Columns";

export default class App extends React.Component {
  state = {
    fontStyle: "italic",
    fontWeight: "bold",
    columnItems: ["one", "two", "three", "four", "five", "six", "seven"],
    columnsNumber: 5,
  };

  render() {
    return (
      <>
        <Title dataTitleTag="h2" />
        <SpaceBlock />
        <Paragraph
          fontStyle={this.state.fontStyle}
          fontWeight={this.state.fontWeight}
        />
        <SpaceBlock />
        <Dropdown />
        <SpaceBlock />
        <Columns
          items={this.state.columnItems}
          columns={this.state.columnsNumber}
        />
      </>
    );
  }
}
