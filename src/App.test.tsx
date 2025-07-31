import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
  test("renders app without crashing", () => {
    render(<App />);
    // Test that the navigation bar renders with Victor's name (more specific text)
    const nameElement = screen.getByText("Victor Del Rio Foces");
    expect(nameElement).toBeInTheDocument();
  });

  test("renders main navigation elements", () => {
    render(<App />);
    // Test that navigation links are present (using role to be more specific)
    const navBar = screen.getByRole("banner"); // AppBar has banner role
    const homeLink = screen.getByRole("link", { name: /home/i });
    const aboutNavLink = screen.getAllByRole("link", { name: /about/i })[0]; // Get the nav one (first)
    const projectsLink = screen.getAllByRole("link", { name: /projects/i })[0]; // Get the nav one (first)
    const contactLink = screen.getByRole("link", { name: /contact/i });

    expect(navBar).toBeInTheDocument();
    expect(homeLink).toBeInTheDocument();
    expect(aboutNavLink).toBeInTheDocument();
    expect(projectsLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
  });

  test("renders home page content by default", () => {
    render(<App />);
    // Test that the home page content loads by default
    const welcomeText = screen.getByText(/Welcome to My Portfolio/i);
    expect(welcomeText).toBeInTheDocument();
  });

  test("renders footer content", () => {
    render(<App />);
    // Test that footer with copyright renders (more specific text)
    const currentYear = new Date().getFullYear();
    const copyrightText = screen.getByText(
      `© ${currentYear} Victor Del Rio Foces. All rights reserved.`
    );
    expect(copyrightText).toBeInTheDocument();
  });
});
