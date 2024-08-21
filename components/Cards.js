import Image from "next/image";
import React from "react";

const Cards = ({ src, alt, title, text }) => {
  return (
    <div className="card w-[18rem] border rounded-xl border-blue-500">
      <Image
        src={`/photos/${src}`}
        alt={alt}
        width={370} 
        height={162} 
        quality={100} // Ensures high-quality rendering
        className="rounded-lg" // Keeping only the rounded class for styling
      />
      <div className="p-5">
        <h5 className="font-bold">{title}</h5>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Cards;
