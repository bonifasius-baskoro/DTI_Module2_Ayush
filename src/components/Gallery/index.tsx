import { FC } from "react";
import SquareImage from "./Square";
import { imageLinks } from "../../data/imageList";

const index: FC = () => {
  console.log(JSON.stringify(imageLinks, null, 2));
  return (
    <>
      <div className="shrink-0 overflow-x-scroll mt-20 w-[100vw] ">
        <div className="flex flex-nowrap w-max gap-[50px]">

        {imageLinks.map((imageURL, index) => (
          <SquareImage key={index} url={imageURL.url} />
        ))}
        </div>
      </div>
      <div className="overflow-x-scroll mt-16 w-[100vw]">
        <div className="flex flex-nowrap w-max gap-[50px]">
        {imageLinks.map((imageURL, index) => (
          <SquareImage key={index} url={imageURL.url} />
        ))}
        </div>
      </div>
    </>
  );
};

export default index;
