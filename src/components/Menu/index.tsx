import { FC } from "react";
import { useMenu } from "../../context/MenuContext";


interface MenuComponentProps {
    menuProviderPresent: true;
  }

const index: FC<MenuComponentProps> = () => {
    const {isMenuVisible, toggleMenu} =useMenu();
    if(!isMenuVisible) return null;
  return (
    <div className="bg-black bg-opacity-60 absolute z-30 w-screen h-screen">
      <div className="w-[50vw] h-[100vh] z-20 absolute left-1/2 bg-black">
        <div className="absolute right-0 translate-x-[-30%] pt-16">
          <button onClick={toggleMenu}>

          <svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.5"
              width="79"
              height="79"
              rx="39.5"
              fill="#F4F7FA"
              stroke="#F4F7FA"
            />
            <line
              x1="25.4345"
              y1="53.4347"
              x2="53.7188"
              y2="25.1505"
              stroke="#0B0C0E"
              stroke-width="2"
            />
            <line
              x1="53.7197"
              y1="54.849"
              x2="25.4354"
              y2="26.5647"
              stroke="#0B0C0E"
              stroke-width="2"
            />
          </svg>
          </button>
        </div>
        <div className="text-white grid text-5xl space-y-7 py-32 pl-16">
          <a>Home</a>
          <a>About</a>
          <a>Work</a>
          <a>Contact</a>
        </div>
        <div className="flex justify-between text-white pt-32 pl-16 pr-64">
          <a>Linkedin</a>
          <a>Twitter</a>
          <a>Instagram</a>
          <a>Webflow</a>
        </div>
      </div>
    </div>
  );
};

export default index;
