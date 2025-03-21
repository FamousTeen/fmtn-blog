import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'

const Footer = () => {
  return (
    <footer className='w-full mb-[100px] md:mb-10 pb-10' id='contact'>
        <div className='flex flex-col items-center'>
            <h1 className='heading lg:max-w-[45vw]'>Ready to take <span className='text-purple'>your digital presence</span> to the next level?</h1>
            <p className='text-white-200 md:mt-10 my-5 text-center'>Reach out to me today and let&apos;s discuss how i can help you achieve your goals.</p>
            <a href="mailto:richardacitta@gmail.com">
                <MagicButton title="Let's get in touch" icon={<FaLocationArrow />} iconPosition="right"/>
            </a>
        </div>

        <div className='flex mt-16 md:flex-row flex-col gap-y-2 justify-between items-center'>
            <p className='md:text-base text-sm md:font-normal font-light'>Copyright © 2025 FmTn</p>

            <div className="flex items-center md:gap-3 gap-6">
                {socialMedia.map(({id, img, name})=> (
                    <div key={id} className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-full border border-black-300'>
                        <img src={img} alt={name} width={20} height={20}/>
                    </div>
                ))}
            </div>
        </div>
    </footer>
  )
}

export default Footer