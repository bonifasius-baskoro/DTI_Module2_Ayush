import { FC } from "react";
import HeroImg from "../../assets/hero-img.png";
import "./style.css";
import OverlayMenu from "../../components/Hero/OverlayMenu";

const index: FC = () => {
  return (
    <div className="w-screen bg-[#C7D0D9] flex justify-center relative  h-[100vh] overflow-x-hidden">
      <OverlayMenu />
      <img src={HeroImg} />
      <div className="overflow-hidden w-full z-10 absolute bottom-20 ">
        <div className="relative w-[200%]">
          <div className=" animate-marquee   text-white text-[200px] whitespace-nowrap inline-block">
            <span>Webflow Developer</span>
            <span> - </span>
            <span>UI/UX</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
