"use client";

import React from "react";
// import { useState } from "react";
import useSWR from "swr";

import Slideshow from "./components/Slideshow";
// import Search from "./components/Search";
import { fetcher } from "./utils/fetcher";
import { Car } from "../types";

const Home = () => {
  // const [filteredData, setFilteredData] = useState<Car[]>([]);
  const { data, error } = useSWR<Car[]>("/api/cars.json", fetcher);

  return (
    <>
      {/* The search functionality is bugged. I only had a few hours to do the project, so I used a 3rd party slideshow and couldn't finish implementing a search within it */}
      {/* <Search setFilteredData={setFilteredData} />
      {filteredData.length ? (
        <Slideshow filteredData={filteredData} />
        ) : (
          <Slideshow filteredData={data ?? []} />
        )} */}
      <Slideshow filteredData={data ?? []} />
    </>
  );
};

export default Home;
