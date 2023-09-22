import React  from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { useTranslation } from "react-i18next";

export const Home = () => {
  const { t } = useTranslation();
  return (
    <div className='bg-[#1a2f54] w-full h-screen' name='home'>

      {/* Container */}

      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
         <p className='text-sky-300 font-bold'> {t('merhaba')}</p>
         <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]"> Baran Kayaalp</h1>
         <h2 className='text-3xl sm:text-6xl font-bold text-[#8892b0]'>{t('homeben')}</h2>
         <p className='text-[#8892b0] py-4 max-w-[700px]'>{t('homehakkimda')}
         </p>
         <div>
          <button className=' duration-500 text-white border-2 px-6 py-3 my-2 flex items-center hover:text-sky-300 hover:border-sky-300 hover:scale-105'> {t('dahafazlasi')}<HiArrowNarrowRight className='ml-3' size={25} /> </button>
         </div>
         </div>
    </div>
  )
}
