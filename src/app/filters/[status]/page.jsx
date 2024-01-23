"use client";

import React, { useEffect, useState } from "react";
import Games from "@/app/components/games";
import axios from "axios";
import { filterFunction } from "@/app/utils";

const Filters = ({ params }) => {
  const { status } = params;

  const [filters, setFilters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://raw.githubusercontent.com/spinbet/fe-interview-test/master/data/sports.json"
        );

        const allData = response.data;
        const filteredData = allData
          ? allData.filter((data) => filterFunction(status, data))
          : [];

        setFilters(filteredData);
        setLoading(false);
      } catch (error) {
        console.log(error) // *TODO HANDLE THIS ERROR LATER
      }
    };

    fetchData();
  }, [status]);

  return <>{loading ? <p>Please wait!</p> : <Games games={filters} />}</>;
};

export default Filters;
