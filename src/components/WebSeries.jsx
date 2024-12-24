import React from 'react'
import { webSeries } from '../constants/images';
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

import "./style.css";

const WebSeries = () => {
  return (
<>
  <div id='WebSeries' className='m-4 p-2 text-4xl font-extrabold underline'><span>Top Webseries Recommended</span></div>

  <div className="flex flex-wrap w-full" id="Movies">
    {webSeries.map((web) => {
      return (
        <div
          className="flex justify-center sm:w-[33%] w-[50%] sm:my-8  rounded-lg"
          key={web.id}
        >
          <div className="sm:w-[1/2] image-bg  w-[80%] my-4 rounded-lg bg-white shadow-lg dark:bg-neutral-700">
            <div>
              <a href="#!">
                <img
                  className="rounded-t-lg w-[100%]   h-[100%] object-cover"
                  src={web.img}
                  alt="img"
                />
              </a>
              <div className="flex sm:flex-row flex-col justify-around items-center">
                <a className='m-1 ' href={web.link}>
                  <p className="p-[5px]   font-bold rounded-md text-[12px] m-[5px] btn-bg sm:text-sm">
                    WATCH NOW <PlayCircleOutlineIcon></PlayCircleOutlineIcon>
                  </p>
                </a>
                <p className="sm:text-lg p-[12px] text-lg font-semibold">{web.webseries}</p>
              </div>
            </div>
          </div>
        </div>
      );
    })}
  </div>
</>

  )
}

export default WebSeries;
