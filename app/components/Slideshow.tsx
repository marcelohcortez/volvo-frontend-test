"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import { Car } from "../../types";
import chevronCircledRight from "../../public/images/chevron-circled-right.svg";
import chevronCircledLeft from "../../public/images/chevron-circled-left.svg";

const responsiveSettings = [
  {
    breakpoint: 800,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 1,
    },
  },
  {
    breakpoint: 500,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
    },
  },
  {
    breakpoint: 240,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    },
  },
];

const SlideshowMount = (data: Car[]) => {
  return (
    <Slide
      slidesToScroll={1}
      slidesToShow={4}
      responsive={responsiveSettings}
      cssClass="slideShow"
      autoplay={false}
      arrows={true}
      indicators={true}
      prevArrow={<Image src={chevronCircledLeft} alt="" />}
      nextArrow={<Image src={chevronCircledRight} alt="" />}
    >
      {data.map((car: Car) => (
        <div key={car.id}>
          <div className="slideshowTop">
            <p className="gray">
              <strong>{car.bodyType}</strong>
            </p>
            <p className="gray">
              <strong className="black">{car.modelName}</strong> {car.modelType}
            </p>
          </div>
          <Image
            src={car.imageUrl}
            alt={car.modelName}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
            width={800}
            height={600}
          />
          <div className="slideshowBottom">
            <Link
              href={`/learn/${car.id}`}
              className="slideshowBottomItem blue"
            >
              Learn &gt;
            </Link>
            <Link href={`/shop/${car.id}`} className="slideshowBottomItem blue">
              Shop &gt;
            </Link>
          </div>
        </div>
      ))}
    </Slide>
  );
};

const Slideshow = (props: { filteredData: Car[] }) => {
  const [data, setData] = useState<Car[]>([]);

  useEffect(() => {
    setData(props.filteredData);
  }, [props.filteredData]);

  return (
    <div>
      {data ? SlideshowMount(data) : <div className="loading">Loading...</div>}
    </div>
  );
};

export default Slideshow;
