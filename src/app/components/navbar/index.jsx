"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { countGamesByType } from "../../utils";
import { NavigationContainer, FiltersWrapper } from "./navbar.styles";

const Navbar = () => {
  const [filters, setFilters] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://raw.githubusercontent.com/spinbet/fe-interview-test/master/data/sports.json"
        );
        setFilters(countGamesByType(response.data));
        setLoading(false)
      } catch (error) {
        console.log(error) // *TODO handle error here
      }
    };

    fetchData();
  }, []);

  return (
    <NavigationContainer>
      <h2>Filters</h2>
      <FiltersWrapper>
        {loading ? (
          <p>Loader here!</p>
        ) : (
          filters?.map(({ type, count }) => {
            return (
              <Link key={type} href={`/filters/${type.toLowerCase()}`}>
                <span>{type}</span>
                <span>{count}</span>
              </Link>
            );
          })
        )}
      </FiltersWrapper>
    </NavigationContainer>
  );
};

export default Navbar;
