import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Columns from "./Columns";

describe("Columns", () => {
  it("render component", () => {
    const columnItems = [1, 2, 3, 4];
    render(<Columns items={columnItems} columns={4} />);
    expect(screen.getByTestId("columns")).toBeInTheDocument();
  });
  it("take style for column number", () => {
    const columnItems = [1, 2, 3, 4];
    render(<Columns items={columnItems} columns={2} />);
    expect(screen.getByTestId("columns")).toHaveStyle(
      "grid-template-columns: repeat(2, 1fr)"
    );
  });
});
