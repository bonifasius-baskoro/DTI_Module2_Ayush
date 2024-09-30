import { FC, useState, useEffect } from "react";
import { useMenu } from "../../context/MenuContext";
import Button from "../../assets/burgerbutton.svg";
interface MenuComponentProps {
  menuProviderPresent: true;
}

const Burger: FC<MenuComponentProps> = () => {
  const [isVisible, setIsVisible] = useState(false);
  const {  toggleMenu } = useMenu();

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero-section");
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        setIsVisible(window.scrollY > heroBottom);
      } 
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className={`fixed top-0  translate-y-4 -translate-x-[40px] w-[80px] h-[80px] right-0 z-50 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <button onClick={toggleMenu}>
        <img src={Button} />
      </button>
    </div>
  );
};

export default Burger;
