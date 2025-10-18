import React, { use } from "react";
const promiseData = fetch("/categories.json").then((res) => res.json());
import { NavLink } from "react-router";

const CarogryData = () => {
  const datas = use(promiseData);
  console.log(datas);
  return (
    <div>
      <h1 className="text-lg font-semibold mb-5">
        All Caterogy ({datas.length})
      </h1>
      <div className="flex flex-col  gap-4">
        {datas.map((element) => (
          <NavLink to={`/catagory/${element.id}`} className="btn bg-base-100 border-0 hover:bg-base-200 font-medium text-accent">{element.name}</NavLink>
        ))}
      </div>
    </div>
  );
};

export default CarogryData;
