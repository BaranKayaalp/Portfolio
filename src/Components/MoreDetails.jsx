import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { AiOutlineDownload } from "react-icons/ai";

const ExpandableCard = ({ title, icon, summary, details, id, activeId, setActiveId }) => {
  const isOpen = activeId === id;

  return (
    <motion.div
      onClick={() => setActiveId(isOpen ? null : id)}
      className={`cursor-pointer bg-[#1f2937] p-5 rounded-lg shadow-md transition-all duration-300 ${
        isOpen ? "scale-105" : "hover:scale-[1.02]"
      }`}
      layout
    >
      <h3 className="text-xl text-sky-300 font-semibold mb-1 flex items-center gap-2">
        {icon} {title}
      </h3>
      <p className="text-sm">{summary}</p>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.4 }}
          className="text-sm mt-2 text-gray-400"
        >
          {details}
        </motion.div>
      )}
    </motion.div>
  );
};

const MoreDetails = ({ goBack }) => {
  const { t } = useTranslation();
  const [activeCard, setActiveCard] = useState(null);

  return (
    <div className="bg-[#1f242d] min-h-screen w-full flex items-start justify-center px-4 pt-[100px] pb-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-[#2c313d] text-gray-200 rounded-2xl shadow-xl p-6 sm:p-10 max-w-4xl w-full"
      >
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-sky-300 text-center">
          {t("cv.title") || "Hakkımda Daha Fazlası"}
        </h1>

        {/* Kartlar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <ExpandableCard
            id="egitim"
            activeId={activeCard}
            setActiveId={setActiveCard}
            title={t("cv.egitim.baslik")}
            icon="🎓"
            summary={t("cv.egitim.ozet")}
            details={t("cv.egitim.detay")}
          />
          <ExpandableCard
            id="projeler"
            activeId={activeCard}
            setActiveId={setActiveCard}
            title={t("cv.projeler.baslik")}
            icon="📁"
            summary={t("cv.projeler.ozet")}
            details={t("cv.projeler.detay")}
          />
          <ExpandableCard
            id="gorevler"
            activeId={activeCard}
            setActiveId={setActiveCard}
            title={t("cv.gorevler.baslik")}
            icon="💼"
            summary={t("cv.gorevler.ozet")}
            details={t("cv.gorevler.detay")}
          />
          <ExpandableCard
            id="ilgialanlari"
            activeId={activeCard}
            setActiveId={setActiveCard}
            title={t("cv.ilgialanlari.baslik")}
            icon="⚙️"
            summary={t("cv.ilgialanlari.ozet")}
            details={t("cv.ilgialanlari.detay")}
          />
        </div>

        {/* Beceriler */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-sky-300 mb-3">🚀 {t("cv.beceriler.baslik")}</h3>
          <div className="flex flex-wrap gap-3">
            {["C", "Embedded C", "STM32", "ARM", "React", "Git", "Matlab"].map((skill, i) => (
              <span
                key={i}
                className="bg-sky-700 px-4 py-1 rounded-full text-sm text-white shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* QR + CV */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <p className="text-sm text-gray-400 mb-2">{t("cv.qr.aciklama")}</p>
            <a href="/BaranKayaalpCV.pdf" download target="_blank">
              <img
                src="/qrcode.png"
                alt="QR ile CV indir"
                className="w-32 h-32 mx-auto sm:mx-0 border-2 border-sky-300 rounded-lg hover:scale-105 transition"
              />
            </a>
          </div>
          <a
            href="/BaranKayaalpCV.pdf"
            download
            className="flex items-center gap-2 border-2 border-sky-300 px-6 py-2 rounded-md text-sky-300 hover:bg-sky-700 hover:text-white transition"
          >
            <AiOutlineDownload /> {t("cv.qr.buton")}
          </a>
        </div>

        {/* Geri Butonu */}
        <div className="mt-10 text-right">
          <button
            onClick={goBack}
            className="text-sm sm:text-base border-2 px-6 py-2 rounded-md hover:border-sky-300 hover:text-sky-300 transition duration-300"
          >
            ← {t("anasayfa") || "Anasayfa"}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default MoreDetails;