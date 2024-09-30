import {FC} from 'react'
import Header from "../../components/Header"
import Hero from "../../components/Hero"
import About from "../../components/About"
import RecentWork from "../../components/RecentWork"
import Gallery from "../../components/Gallery"
import Testimony from "../../components/Testimony"
import Footer from "../../components/Footer"
import Menu from "../../components/Menu"


const LandingPage:FC = () => {
  return (
    <>
    <Header/>
    <Menu/>
    <Hero/>
    <About/>
    <RecentWork/>
    <Gallery/>
    <Testimony/>
    <Footer/>
    </>

  )
}

export default LandingPage;