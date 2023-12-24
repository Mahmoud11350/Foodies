"use client";

import { useRef, useState } from "react";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState();
  const imageInput = useRef();

  function handlePickClick() {
    imageInput.current.click();
  }

  function handleImageChange(event) {
    const file = event.target.files[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  }

  return (
    <div className={"capitalize"}>
      <label htmlFor={name} className="text-[#A29E97] text-lg font-bold">
        {label}
      </label>
      <div className={""}>
        <div
          className={
            "w-48 bg-[#1C2027] rounded flex items-center justify-center h-48 relative my-3 text-white"
          }
        >
          {!pickedImage && <p>No image picked yet.</p>}
          {pickedImage && (
            <Image
              src={pickedImage}
              alt="The image selected by the user."
              fill
              className="z-10 rounded"
            />
          )}
        </div>
        <input
          className={"hidden"}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInput}
          onChange={handleImageChange}
        />
        <button
          className={
            "bg-text py-3 px-4 rounded-lg font-bold text-white tracking-wider"
          }
          type="button"
          onClick={handlePickClick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
