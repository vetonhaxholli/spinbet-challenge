import React from "react";
import { render, screen } from "@testing-library/react";
import Game from "../game/[gameStatus]/page";

const mockSportData = {
  awayScore: { current: 1 },
  awayTeam: { name: "FK Tyumen" },
  competition: "Football National League",
  country: "Ukraine",
  homeScore: { current: 2 },
  homeTeam: { name: "Luch-Energiy" },
  liveStatus: "Live",
  status: { type: "inprogress" },
};

describe("Filters component", () => {
  test("renders Game component with provided data", () => {
    const searchParams = { data: JSON.stringify(mockSportData) };

    render(<Game searchParams={searchParams} />);

    expect(screen.getByText("Ukraine")).toBeInTheDocument();
    expect(screen.getByText("Football National League")).toBeInTheDocument();
    expect(screen.getByText("2 - 1")).toBeInTheDocument();
    expect(screen.getByText("Luch-Energiy")).toBeInTheDocument();
    expect(screen.getByText("FK Tyumen")).toBeInTheDocument();
  });

  test("does not render anything when searchParams is null", () => {
    render(<Game searchParams={null} />);

    expect(screen.queryByText("Ukraine")).toBeNull();
    expect(screen.queryByText("Football National League")).toBeNull();
  });
});

//  TODO: ... More tests to wrie of course if you like my project
