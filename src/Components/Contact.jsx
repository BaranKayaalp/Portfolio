import React from 'react'
import { useTranslation } from "react-i18next";

export const Contact = () => {
    const { t } = useTranslation();
  return (
     <div className='w-full h-screen bg-[#1a2f54] flex justify-center items-center p-4' name='contact'>
       
        <form action="https://getform.io/f/cd39e7bf-61cb-45c6-bbc9-6037d28115e5" method='POST' className='flex flex-col max-w-[600px] w-full '>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-sky-300 text-gray-300'>{t('iletisim')}</p>
                <p className='text-gray-300 py-4'>{t('iletisimparagraf')}</p>
            </div>
            <input type="text" name='name' placeholder={t('isim')} className='p-2' />
            <input type="email" placeholder='Email' name='email' className='my-4 p-2 bg=[#ccd6f6]' />
            <textarea name='message' placeholder={t('mesajınız')} id="" rows="10" className='bg=[#ccd6f6] p-2'></textarea>
            <button className='hover:scale-105 duration-500 text-white border-2 hover:text-sky-300 hover:border-sky-300 px-4 py-3 my-8 mx-auto flex items-center' type='submit'> {t('yolla')}</button>
       </form>
       
        </div>

   
  );
};