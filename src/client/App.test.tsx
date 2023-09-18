import { render, screen } from "@testing-library/react";
import App from "./App";
import { MemoryRouter } from "react-router-dom";

describe("Home route: /", () => {
  it("renders the home page", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );

    screen.getByRole("heading", { name: "Home" });
  });
});

describe("Songs route: /songs", () => {
  it("renders the songs page", () => {
    render(
      <MemoryRouter initialEntries={["/songs"]}>
        <App />
      </MemoryRouter>
    );

    screen.getByRole("heading", { name: "Songs" });
  });
});
