import { FunctionComponent } from "react";
import userEvent from "@testing-library/user-event";

import { render, screen } from "@/test-utils";

import Login from "@/pages/login";

describe("Login page", () => {
  const LoginC = Login as FunctionComponent;

  it("Render check", () => {
    const { container } = render(<LoginC />);
    expect(container).toMatchSnapshot();
  });
  it("Client validation check", async () => {
    render(<LoginC />);

    const submitButton = screen.getByRole("button", { name: "Sign In" });

    await userEvent.click(submitButton);

    expect(screen.getAllByText("Required field!")).toHaveLength(2);

    await userEvent.type(
      screen.getByRole("textbox", { name: "Identifier Required field!" }),
      "test"
    );

    expect(screen.getByText("Required field!")).toBeInTheDocument();
    expect(screen.getByText("Min length 6!")).toBeInTheDocument();

    await userEvent.type(
      screen.getByRole("textbox", { name: "Password Required field!" }),
      "test"
    );

    expect(screen.getByText("Min length 6!")).toBeInTheDocument();
    expect(screen.getByText("Min length 8!")).toBeInTheDocument();

    await userEvent.type(
      screen.getByRole("textbox", { name: "Identifier Min length 6!" }),
      "test@test"
    );
    await userEvent.type(
      screen.getByRole("textbox", { name: "Password Min length 8!" }),
      "testtest!"
    );

    const alerts = screen.getAllByRole("alert");

    expect(alerts).toHaveLength(2);
    expect(alerts[0]).toMatchSnapshot();
    expect(alerts[1]).toMatchSnapshot();
  });
});
