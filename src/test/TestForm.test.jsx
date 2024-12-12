import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import TestForm from "../Components/TestForm";

describe("Testing TestForm Component", () => {
  test("Should render and change input", () => {
    render(<TestForm />);
    //const pass = screen.getByRole("textbox");
    //const pass = screen.getByRole("input");
    const pass = screen.getByTestId("password");

    fireEvent.change(pass, { target: { value: "Contraseña123" } });

    expect(pass).toBeVisible();
    expect(pass.value).toBe("Contraseña123");
  });
  test("Should render button and call function", () => {
    const handleSumbit = vi.fn();
    render(<TestForm handleSumbit={handleSumbit} />);
    const btn = screen.getByText("Enviar");

    fireEvent.click(btn);
    // fireEvent.click(btn);
    // fireEvent.click(btn);
    // fireEvent.click(btn);
    // fireEvent.click(btn);
    // fireEvent.click(btn);
    // fireEvent.click(btn);

    expect(btn).toBeVisible();
    expect(handleSumbit).toBeCalledTimes(1);
  });
});
