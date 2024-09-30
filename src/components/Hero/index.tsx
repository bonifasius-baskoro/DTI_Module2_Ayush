import {FC} from 'react'
import HeroImg from "../../assets/hero-img.png"
import './style.css'
import OverlayMenu from "../../components/Hero/OverlayMenu"



const index:FC = () => {
  return (
    <div className="w-screen bg-[#C7D0D9] flex justify-center relative  h-[100vh] overflow-x-hidden">
        <OverlayMenu/>
        <img src={HeroImg} className=''/>
    </div>
  )
}

export default index