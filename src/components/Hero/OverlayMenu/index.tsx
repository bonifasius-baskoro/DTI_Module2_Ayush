import {FC} from "react";
import { useMenu } from "../../../context/MenuContext";

const Index: FC = () => {
    const{toggleMenu}= useMenu();
  return (
    <button onClick={toggleMenu} className="absolute z-20 top-[50%] right-0 translate-y-[-50%] translate-x-[120px] text-white flex gap-7 justify-center align-middle bg-black pt-5 pb-5 pl-8 rounded-full transform transition-transform duration-300 ease-in-out hover:translate-x-0 pr-7">
      <span>👋</span><span>Hi I’m Ayush</span>
    </button>
  );
}

export default Index;