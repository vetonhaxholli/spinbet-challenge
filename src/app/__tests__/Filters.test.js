import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import Filters from "../filters/[status]/page";
import * as utilsModule from "../utils";

jest.mock("axios");

describe("Filters component", () => {
  test("renders loading message while fetching data", async () => {
    axios.get.mockResolvedValueOnce({ data: [] });

    render(<Filters params={{ status: "someStatus" }} />);

    expect(screen.getByText("Please wait!")).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.queryByText("Please wait!")).toBeNull();
    });
  });

  test("renders Games component with filtered data after fetching", async () => {
    const mockData = [
      {
        awayScore: { current: 1 },
        awayTeam: { name: "FK Tyumen" },
        competition: "Football National League",
        country: "Ukraine",
        homeScore: { current: 2 },
        homeTeam: { name: "Luch-Energiy" },
        liveStatus: "Live",
        status: { type: "inprogress" },
      },
    ];

    jest.spyOn(axios, 'get').mockResolvedValueOnce({ data: mockData });

    const spy = jest.spyOn(utilsModule, "filterFunction");
    spy.mockReturnValueOnce(true);

    render(<Filters params={{ status: "someStatus" }} />);

    await waitFor(() => {
      expect(screen.queryByText("Please wait!")).toBeNull();
      expect(screen.getByTestId("games-component")).toBeInTheDocument(); // Assuming you have a test id in the Games component
    });

    expect(spy).toHaveBeenCalledWith("someStatus", mockData[0]);
  });
});
