import React from "react";
import { useTranslation } from "react-i18next";

export const About = () => {
  const { t } = useTranslation();
  
  return (
    <div className= "w-full h-screen bg-[#323946] text-gray-300" name="about">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold  inline border-b-4 border-sky-300">
              {t('hakkimda')}
            </p>
          </div>
          <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <p>
                {t('abouthakkimda')}
              </p>
            </div>
            <div>
              <p>
                {t('aboutgelisim')}
              </p>
            </div>
          </div>
        </div>
      </div>
  );
};
