import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Title from "./Title";

describe("Title", () => {
  it("render component", () => {
    render(<Title dataTitleTag="h3" />);
    expect(screen.getByText(/Amazing/)).toBeInTheDocument();
  });
  it("contains correct text", () => {
    render(<Title dataTitleTag="h3" />);
    expect(screen.getByText(/Amazing/)).toHaveTextContent("Amazing React");
  });
  it("render width correct HTML tag", () => {
    render(<Title dataTitleTag="h2" />);
    expect(screen.getByText(/Amazing/)).toHaveClass("h2");
  });
  it("render width correct tag", () => {
    render(<Title dataTitleTag="h4" />);
    expect(screen.getByText(/Amazing/)).toHaveClass("h4");
  });
  it("render width correct HTML tag when take incorrect prop", () => {
    render(<Title dataTitleTag="test" />);
    expect(screen.getByText(/Amazing/)).toHaveClass("h1");
  });
});
