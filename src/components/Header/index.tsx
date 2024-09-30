import { FC } from 'react';

import './style.css';

const Index:FC = () => {
  return (
    <header className="absolute z-2 py-[26px] px-20 text-[28px] font-inter w-[calc(100%-0.2vw)] top-0 left-0">
      <nav className='flex justify-between w-full'>
        <div>
          @Ayush Barnwal
        </div>
        <div className="flex justify-between gap-9 w-auto ">
          <a href="/public">About</a>
          <a href="#work">Work</a>
          <a href="/contact-us">Contact</a>
        </div>
      </nav>
    </header>
  )
}

export default Index;