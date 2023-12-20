"use client";
import burger from "@/assets/burger.jpg";
import curry from "@/assets/curry.jpg";
import dumplings from "@/assets/dumplings.jpg";
import macncheese from "@/assets/macncheese.jpg";
import pizza from "@/assets/pizza.jpg";

import Image from "next/image";
import { useEffect, useState } from "react";
const ImageSlider = () => {
  const images = [burger, curry, dumplings, macncheese, pizza];
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setImageIndex((prevImageIndex) =>
        prevImageIndex < images.length - 1 ? prevImageIndex + 1 : 0
      );
    }, 4000);

    return () => clearInterval(imageInterval);
  });
  return (
    <div className="relative w-full lg:w-1/2 h-[400px] overflow-hidden rounded-lg">
      {images.map((image, index) => {
        return (
          <Image
            key={index}
            src={image}
            className={`w-full h-full rounded-lg absolute top-0 left-0 opacity-0 transform -rotate-1  scale-[1.1] -translate-x-1 transition-[1s_all] ${
              index == imageIndex
                ? "z-10 opacity-100 transform  scale-1 translate-x-0 rotate-0 transition-[1s_all]"
                : " "
            }`}
          />
        );
      })}
    </div>
  );
};
export default ImageSlider;
