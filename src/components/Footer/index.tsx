import  { FC } from 'react'
import profpic from '../../assets/footer/profpic.png'


const index:FC = () => {
  return (
    <div>
        <div className='bg-[#0B0C0E] px-[80px]'>
            <div className='flex justify-between pt-[80px] content-center gap-[300px]'>
                <div className='min-w-[649px]'>
                    <h1 className='font-inter text-[60px] whitespace-nowrap text-white'>Have something in mind?</h1>
                    <h1 className='font-inter text-[60px] text-white flex items-center'>
                       <img src={profpic} alt="profpic"/>
                        Let's build it together
                        </h1>
                </div>
                <div className='content-center '>
                    <button className='bg-[#F4F7FA] text-base  py-[24px] px-[48px] rounded-full w-[190px] h-[70px]'>
                        Get in touch
                    </button>
                    
                </div>
            </div>
            <div className='mt-32 pb-8 flex justify-between'>
                <div>
                    <h1 className='text-[#C7D0D9]'>Build with 💖 by Brightscout & Ayush </h1>
                </div>
                <div className='text-[#C7D0D9] flex justify-between gap-3 '>
                    <p>Linkedin</p>
                    <p>Twitter</p>
                    <p>Instagram</p>
                    <p> Webflow</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default index