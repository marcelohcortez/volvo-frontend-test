"use client";
import React from "react";
import useSWR from "swr";
import { useEffect, useState } from "react";

import { Car } from "../../types";
import { fetcher } from "../utils/fetcher";

const Search = (props: { setFilteredData: (data: Car[]) => void }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const { data, error } = useSWR<Car[]>("/api/cars.json", fetcher);
  const [searchResult, setSearchResult] = useState(data);

  useEffect(() => {
    if (searchResult) {
      props.setFilteredData(searchResult);
    }
  });

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value) {
      setSearchTerm(event.target.value);
      const result = data?.filter((car) => car.bodyType.includes(searchTerm));
      setSearchResult(result);
    } else {
      setSearchTerm(event.target.value);
      setSearchResult(data);
    }

    if (searchResult) {
      props.setFilteredData(searchResult);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search by body type"
      />
    </div>
  );
};

export default Search;
