import {FC} from 'react'
import HeroImg from "../../assets/hero-img.png"
import './style.css'



const index:FC = () => {
  return (
    <div className="w-screen bg-[#C7D0D9] flex justify-center ">
        <img src={HeroImg} className=''/>
    </div>
  )
}

export default index