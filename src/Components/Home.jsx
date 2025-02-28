import React  from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export const Home = () => {
  const { t } = useTranslation();
  return (
    <motion.div 
    initial={{ opacity: 1, y: 0 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className='bg-[#1f242d] w-full h-screen' 
    name='home'
  >
    {/* Container */}
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
      className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'
    >
      <p className='text-sky-300 font-bold'> {t('merhaba')}</p>
      <motion.h1 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]"
      >
        Baran Kayaalp
      </motion.h1>
      <motion.h2 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className='text-3xl sm:text-6xl font-bold text-[#8892b0]'
      >
        {t('homeben')}
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className='text-[#8892b0] py-4 max-w-[700px]'
      >
        {t('homehakkimda')}
      </motion.p>
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <button className='duration-500 text-white border-2 px-6 py-3 my-2 flex items-center hover:text-sky-300 hover:border-sky-300 hover:scale-105'>
          {t('dahafazlasi')}
          <HiArrowNarrowRight className='ml-3' size={25} />
        </button>
      </motion.div>
    </motion.div>
  </motion.div>
  
  
  
  )
}
