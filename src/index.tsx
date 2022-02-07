import "./scss/style.scss";

import React from "react";
import { render } from "react-dom";
import App from "./ts/App/App";

const rootElement = document.querySelector("#root");

render(<App></App>, rootElement);
