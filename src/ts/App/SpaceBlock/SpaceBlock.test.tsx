import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import SpaceBlock from "./SpaceBlock";

describe("SpaceBlock", () => {
  it("render component", () => {
    render(<SpaceBlock />);
    const element = screen.getByTestId("space-block");
    expect(element).toBeInTheDocument();
  });
});
