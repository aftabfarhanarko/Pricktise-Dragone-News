import { Suspense } from "react";
import CarogryData from "./CarogryData";


const LeftSideBar = () => {


  return (
    <div>
      <Suspense fallback={<span className="loading loading-spinner text-secondary"></span>
}>
        <CarogryData></CarogryData>
      </Suspense>
    </div>
  );
};

export default LeftSideBar;
