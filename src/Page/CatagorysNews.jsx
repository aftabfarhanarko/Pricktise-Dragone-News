import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import CardNews from "../Components/CardNews";
import NotFOundPages from "../Components/NotFOundPages";


const CatagorysNews = () => {
  const [mySetData, setMySetData] = useState([]);
  const data = useLoaderData();
  console.log(data);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    if (id == "0") {
      setMySetData(data);
    } else if (id == "1") {
      const filtersData = data.filter(
        (element) => element.others.is_today_pick == true
      );
      setMySetData(filtersData);
    } else {
      const filtersData = data.filter((element) => element.category_id == id);
      setMySetData(filtersData);
    }
  }, [data, id]);

  return (
    <div>
      <h1 className="text-center font-semibold text-lg mb-5">
        Total News ({mySetData.length})
      </h1>
      <div>
        {mySetData.length == 0 ? (
          <NotFOundPages></NotFOundPages>
        ) : (
          <>
            {mySetData.map((card) => (
              <CardNews card={card}></CardNews>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default CatagorysNews;
