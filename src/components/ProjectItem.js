import React from "react";

export default function ProjectItem({ image, name }) {
  return (
    <>
      <div className="bg-darkGreyishBlue flex flex-col rounded-t-2xl rounded-tr-2xl w-80 text-center m-8 shadow-lg hover:shadow-2xl cursor-pointer transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300">
        <a
          href="https://github.com/priyadarshi001"
          target="_blank"
          rel="noreferrer"
        >
          <div
            className="rounded-t-2xl rounded-tr-2xl w-full h-56 bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
          <h2 className="text-2xl mt-2 text-veryLightGray">{name}</h2>
        </a>
      </div>
    </>
  );
}


// 1st image has more right-margin