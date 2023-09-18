import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import Navigation from "./Navigation";

it("renders a link to the home page", () => {
  render(
    <MemoryRouter>
      <Navigation />
    </MemoryRouter>
  );

  screen.getByRole("link", { name: "Home" });
});
