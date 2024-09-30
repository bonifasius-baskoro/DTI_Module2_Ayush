import { FC } from "react";


function getImageUrl(url:string) :string{
    return new URL(`${url}`, import.meta.url).href
  };

const index: FC<ImageProps> = ({ url }) => {
  return (
    <>
      <div className="bg-[#c7d0d9] w-[444px] h-[306px] flex justify-center items-center hover:drop-shadow-2xl">
        <img className="w-[348px] h-[194px] relative " src={getImageUrl(url)} />
      </div>
    </>
  );
};

export default index;
