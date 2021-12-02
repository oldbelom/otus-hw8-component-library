import React, { Component } from "react";

interface Props {
  dataTitleTag: string;
}

export default class Title extends Component<Props, Record<string, unknown>> {
  render() {
    switch (this.props.dataTitleTag) {
      case "h1":
        return <h1 className="h1">Amazing React</h1>;
      case "h2":
        return <h2 className="h2">Amazing React</h2>;
      case "h3":
        return <h3 className="h3">Amazing React</h3>;
      case "h4":
        return <h4 className="h4">Amazing React</h4>;
      default:
        return <h1 className="h1">Amazing React</h1>;
    }
  }
}
