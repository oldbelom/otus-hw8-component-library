import React, { Component } from "react";

interface Props {
  items: Array<any>;
  columns: number;
}

export default class Columns extends Component<Props, Record<string, unknown>> {
  styles = {
    color: "green",
    fontSize: "30px",
    display: "grid",
  };

  render() {
    return (
      <div
        style={{
          ...this.styles,
          gridTemplateColumns: `repeat(${this.props.columns}, 1fr)`,
        }}
        data-testid="columns"
      >
        {this.props.items &&
          this.props.items.map((item, index) => (
            <span key={`${item}_${index}`}>{item}</span>
          ))}
      </div>
    );
  }
}
