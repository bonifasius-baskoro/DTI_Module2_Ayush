import { FC } from "react";
import "./style.css";
import { DUMMY_PROJECTS } from "../../data/projectList";
import Work from "./Work";

const index: FC = () => {
  return (
    <>
      <div className="flex mt-20 ">
        <div className="pl-[80px] mr-[10vw] basis-[30%] overflow-hidden">
          <h1 className="text-[40px]">Recent Work</h1>
        </div>
        <div className="flex flex-col justify-between basis-[70%] pl-[4vw]">
          {DUMMY_PROJECTS.map((project, index) => (
            <Work key={index} {...project} />
          ))}
        </div>
      </div>
    </>
  );
};

export default index;
