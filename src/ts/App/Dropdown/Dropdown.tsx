import React, { Component } from "react";

export default class Dropdown extends Component<
  Record<string, unknown>,
  { isOpen: boolean }
> {
  state = {
    isOpen: false,
  };

  showContent() {
    this.setState((state) => ({
      isOpen: !state.isOpen,
    }));
  }

  render() {
    return (
      <div className="dropdown" data-testid="dropdown">
        <h3 onClick={() => this.showContent()}>Сlick on me to see the text</h3>
        {this.state.isOpen && (
          <p data-testid="dropdown-text">Some interesting text</p>
        )}
      </div>
    );
  }
}
