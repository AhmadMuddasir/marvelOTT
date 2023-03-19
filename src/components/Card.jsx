import React from "react";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { images } from "../constants/images";

const Card = () => {
  return (
    <>
    <div className='m-4  p-2 text-4xl font-extrabold underline'><span>Top Movies Recommended</span></div>

    <div className="flex flex-wrap w-[100%]" id="Movies">

    {images.map((image) => {
      return (
        <div
          className="flex justify-center sm:w-[33%] w-[50%] sm:my-8  rounded-lg"
          key={image.id}
        >
          <div className="image-bg  sm:w-[1/2]   w-[80%] my-4 rounded-lg bg-white shadow-lg dark:bg-neutral-700">
            <div className="rounded-lg">
              <a href="#!">
                <img
                  className="rounded-t-lg w-[100%]   h-[100%] object-cover"
                  src={image.img}
                  alt="img"
                />
              </a>
              <div className="flex sm:flex-row flex-col justify-around items-center">
                <a className='m-1 ' href={image.link}>
                  <p className="p-[5px]   font-bold rounded-md text-[12px] m-[5px] btn-bg sm:text-sm">
                    Watch Now <PlayCircleOutlineIcon></PlayCircleOutlineIcon>
                  </p>
                </a>
                <p className="sm:text-lg p-[12px] text-lg font-semibold">{image.movie}</p>
              </div>
            </div>
          </div>
        </div>
      );
    })}</div>
    </>
  );
};

export default Card;
