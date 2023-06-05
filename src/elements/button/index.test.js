import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import Button from "./index";

test("Button should not allowed click if isDisabled is present", () => {
    const { container } = render(<Button isDisabled></Button>);

    expect(container.querySelector("span.disabled")).toBeInTheDocument();
});

test("Should render loading/spinner", () => {
    const { container,getByText } = render(<Button isLoading></Button>);

    expect(getByText(/Loading/i)).toBeInTheDocument();
    expect(container.querySelector("span")).toBeInTheDocument();
});

test("Should render tag <a>", () => {
    const { container } = render(<Button type="link" isExternal></Button>);

    expect(container.querySelector("a")).toBeInTheDocument();
});

test("Should render <link> component", () => {
    const { container } = render(
    <Router>
        <Button href="" type="link"></Button>
    </Router>);

    expect(container.querySelector("a")).toBeInTheDocument();
});