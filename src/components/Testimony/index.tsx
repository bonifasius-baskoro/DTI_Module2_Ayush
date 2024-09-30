import { FC } from "react";
import TestimonyCard from "./TestimonyCard";
import { TestimonyList } from "../../data/testimonyList";

const index: FC = () => {
  return (
    <>
      <div className="mt-36 flex sm:flex-none mb-36">
        <div className=" pl-[92px] mr-[200px] ">

        <h1 className="text-[40px] font-inter">Testimonials</h1>
        </div>
        <div className="pr-[86px]">
          {TestimonyList.map((testimony, index) => (
            <TestimonyCard key={index} {...testimony}
            className={index !== TestimonyList.length - 1 ? "mb-[64px]" : ""} />
          ))}
        </div>
      </div>
    </>
  );
};

export default index;
