import { CiShare2 } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router";

const CardNews = ({card}) => {
     const formentDate = new Date(card.author.published_date).toLocaleDateString();
    return (
        <div className="mb-5  flex-col space-y-3 border-2 border-base-300 rounded-md">
      <div className="p-3 flex justify-between bg-base-300 ">
        <div className="flex gap-4 items-center">
          <img
            className="w-[50px] h-[50px] rounded-full"
            src={card.author.img}
          ></img>
          <div>
            <p className="text-[14px]">{card.author.name}</p>
            <p className="text-[10px] mt-1">{formentDate}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <CiBookmark />
          <CiShare2 />
        </div>
      </div>

      <div className="flex flex-col mx-auto px-7 py-2">
        <h1 className="font-semibold text-lg">{card.title}</h1>
        <img
          className="mt-5 rounded-md h-[270px] object-cover"
          src={card ? card.thumbnail_url : card.image_url}
        ></img>

        <p className="mt-4 text-[14px] leading-relaxed text-accent">
          { card.details.length <= 200
            ? card.details
            : `${card.details.slice(0, 200)}... `}
        
            <Link to={`/new_detlise/${card.id}`} className="font-medium text-orange-600 hover:underline cursor-pointer"
            >Read More</Link>
        
        </p>

        <p className="h-[1px] bg-accent mt-3"></p>

        <div className="flex mt-5 mb-7 justify-between">
          <div className="flex items-center gap-3">
            <div className="text-orange-400 flex gap-2 ">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="text-accent">{card.rating.number}</p>
          </div>
          <div className="flex items-center gap-2">
            <FaEye />
            <p className="text-[14px] text-accent">{card.total_view}</p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default CardNews;