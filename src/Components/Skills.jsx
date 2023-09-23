import React from 'react'
import JavaScript from '../assets/js.png'
import html from '../assets/html.png'
import css from '../assets/css.png'
import jquerry from '../assets/jquerry.png'
import react from '../assets/react.png'
import tw from '../assets/tailwind.png'
import bootstrap from '../assets/bootstrap.png'
import github from '../assets/github.png'
import { useTranslation } from "react-i18next";

export const Skills = () => {
    const { t, i18n } = useTranslation();
  return (
    <div name='skills' className='bg-[#1f242d] text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl  font-bold inline border-b-4 border-sky-300'>{t('yetenekler')}</p>
                <p className='py-4'> {t('yeteneklerhakkinda')}</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={html} className='w-20 mx-auto' alt="HTML İCON" />
                    <p className='my-4 font-bold'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={css} className='w-20 mx-auto' alt="HTML İCON" />
                    <p className='my-4 font-bold'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={JavaScript} className='w-48 mx-auto' alt="HTML İCON" />
                    <p className='my-4 font-bold'>JavaScript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={react} className='w-48 mx-auto' alt="HTML İCON" />
                    <p className='my-4 font-bold'>React JS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={jquerry} className='w-20 mx-auto' alt="HTML İCON" />
                    <p className='my-4 font-bold'>jQuerry</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={tw} className='w-20 mx-auto' alt="HTML İCON" />
                    <p className='my-4 font-bold'>TailWind</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={bootstrap} className='w-20 mx-auto' alt="HTML İCON" />
                    <p className='my-4 font-bold'>Bootstrap</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={github} className='w-20 mx-auto fill-white' alt="HTML İCON" />
                    <p className='my-4 font-bold'>GitHub</p>
                </div>
            </div>
        </div>
    </div>
  )
}
