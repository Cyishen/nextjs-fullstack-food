import React from "react";
import Halloween from "./Halloween";


const Event = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between h-[50vh] md:h-[40vh] mb-10 md:mb-0">
      <div className="flex-1 flex flex-col justify-center items-center text-center gap-8 p-6">
        <Halloween />
        <h1 className="text-5xl font-extrabold xl:text-6xl">Halloween Coming</h1>
        <p className="xl:text-xl">
          Oct 31, 2023 10:00 a.m. PT
        </p>
      </div>
    </div>
  );
};

export default Event;