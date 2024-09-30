import { FC } from "react";

// import './style.css'

interface LinkProps {
  link: string;
}

const index: FC<LinkProps> = ({ link }) => {
  return (
    <div className="text-red-300">
      <a className="text-white" href={link} target="_blank">
        {/* <img src={ArrowForward} alt="arrow" className='w-[82px] rounded-full border-[1px] border-solid border-slate-600 hover:bg-gray-700 fill-black'/> */}
        <div className="text-black hover:text-white rounded-full border-[1px] border-solid border-slate-600 hover:bg-gray-700 fill-black ">
        <svg
          width="82"
          height="82"
          viewBox="0 0 46 46"
          className="fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.8301 15.4575L15.8301 18.1162L26.3612 18.1257L14.8873 29.5997L16.7729 31.4853L28.2469 20.0113L28.2563 30.5425L30.915 30.5425V15.4575H15.8301Z"
            // fill="#3C3D3E"
          />
        </svg>
        </div>
      </a>
    </div>
  );
};

export default index;
