import { FC } from "react";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import About from "../../components/About";
import RecentWork from "../../components/RecentWork";
import Gallery from "../../components/Gallery";
import Testimony from "../../components/Testimony";
import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
import { MenuProvider } from "../../context/MenuContext";

const LandingPage: FC = () => {
  return (
    <>
      <MenuProvider>
        <div>
          <Header />
          <Menu menuProviderPresent={true} />
          <Hero />
          <About />
          <RecentWork />
          <Gallery />
          <Testimony />
          <Footer />
        </div>
      </MenuProvider>
    </>
  );
};

export default LandingPage;
