"use client";

import React from "react";
import Image from "next/image";
import useSWR from "swr";

import { Car } from "../../../types";
import { fetcher } from "../../utils/fetcher";

//MISSING STYLES, DIDN'T HAD THE TIME
const LearnItem = ({ params }: { params: { id: string } }) => {
  const { data, error } = useSWR<Car[]>("/api/cars.json", fetcher);
  return data?.map((car: Car) => {
    if (car.id === params.id) {
      return (
        <>
          <h1>LEARN MORE ABOUT</h1>
          <div key={car.id}>
            <Image
              src={car.imageUrl}
              alt={car.modelName}
              width={800}
              height={600}
            />
            <h1>{car.modelName}</h1>
            <p>{car.modelType}</p>
            <p>{car.bodyType}</p>
          </div>
        </>
      );
    }
  });
};

export default LearnItem;
