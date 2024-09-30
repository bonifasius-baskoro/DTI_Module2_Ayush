import { FC } from 'react'

function getImageUrl(url:string) :string{
    return new URL(`${url}`, import.meta.url).href
  };

const index:FC<TestimonyProps> = ({name,imageLink,role, className}) => {
  return (
    <>
    <div className='pl-[86px]'>
      <p className='text-[27px]'>
      “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.” 
      </p>
      <div className='mt-[34.5px] flex'>
        <div id='image'>
        <img className={"w-[64px] h-[64px] relative " + `${className}`} src={getImageUrl(imageLink)} />
        </div>
        <div className='ml-2 pt-1'>
          <h2 className='text-[18px] font-inter'>{name}</h2>
          <h3 className='text-[14px] pt-2'>{role}</h3>
        </div>
      </div>
    </div>
    </>
      
  )
};

export default index