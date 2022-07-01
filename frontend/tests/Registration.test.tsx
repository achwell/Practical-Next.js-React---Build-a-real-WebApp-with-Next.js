import { FunctionComponent } from "react";
import { render, screen } from "@/test-utils";
import userEvent from "@testing-library/user-event";

import Registration from "@/pages/registration";

describe("Registration page", () => {
  const RC = Registration as FunctionComponent;

  it("Render check", () => {
    const { container } = render(<RC />);
    expect(container).toMatchSnapshot();
  });
  it("Client validation check", async () => {
    render(<RC />);

    const submitButton = screen.getByRole("button", { name: "Sign Up" });

    await userEvent.click(submitButton);

    expect(screen.getAllByText("Required field!")).toHaveLength(3);

    await userEvent.type(
      screen.getByRole("textbox", { name: "username Required field!" }),
      "test"
    );
    await userEvent.type(
      screen.getByRole("textbox", { name: "email Required field!" }),
      "test"
    );
    await userEvent.type(
      screen.getByRole("textbox", { name: "password Required field!" }),
      "test"
    );

    expect(screen.getByText("Min length 6!")).toBeInTheDocument();
    expect(screen.getByText("Invalid email!")).toBeInTheDocument();
    expect(screen.getByText("Min length 8!")).toBeInTheDocument();

    await userEvent.type(
      screen.getByRole("textbox", { name: "username Min length 6!" }),
      "test--!"
    );
    await userEvent.type(
      screen.getByRole("textbox", { name: "email Invalid email!" }),
      "test@test"
    );
    await userEvent.type(
      screen.getByRole("textbox", { name: "password Min length 8!" }),
      "testtest!"
    );

    expect(
      screen.getByText("Only letters, numbers and spaces!")
    ).toBeInTheDocument();

    const usernameInput = await screen.getByRole("textbox", {
      name: "username Only letters, numbers and spaces!",
    });
    await userEvent.clear(usernameInput);
    await userEvent.type(usernameInput, "testtesttest");

    const alerts = screen.getAllByRole("alert");

    expect(alerts).toHaveLength(3);
    expect(alerts[0]).toMatchSnapshot();
    expect(alerts[1]).toMatchSnapshot();
    expect(alerts[2]).toMatchSnapshot();
  });
});
