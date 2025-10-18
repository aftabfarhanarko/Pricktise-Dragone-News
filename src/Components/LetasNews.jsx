import React from "react";
import Marquee from "react-fast-marquee";

const LetasNews = () => {
  return (
    <div className="bg-base-300 p-3 mt-5 rounded-md">
      <div className="flex items-center gap-5">
        <button className="btn-secondary btn">Latest</button>
        <Marquee
          className="flex gap-5 cursor-pointer"
          speed={100}
          pauseOnHover={true}
        >
          <p className="text-md font-semibold ">
            Match Highlights: Germany vs Spain — as it happened ! Match
            Highlights: Germany vs Spain as...
          </p>
          <p className="text-md font-semibold">
            Match Highlights: Germany vs Spain — as it happened ! Match
            Highlights: Germany vs Spain as...
          </p>
          <p className="text-md font-semibold">
            Match Highlights: Germany vs Spain — as it happened ! Match
            Highlights: Germany vs Spain as...
          </p>
        </Marquee>
      </div>
    </div>
  );
};

export default LetasNews;
