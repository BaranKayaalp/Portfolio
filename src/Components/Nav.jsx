import React, { useState, useRef, useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";
import Logo from "../assets/logo.png";
import { useTranslation } from "react-i18next";
import trbayragi from "../assets/trbayraği.png";
import enbayragi from "../assets/en.png";
import itbayragi from "../assets/itbayragi.png"
import { motion } from "framer-motion";

export const Nav = () => {

  let menu_item1 = useRef(null);
  let logo = useRef(null);

  const { t, i18n } = useTranslation();
  const clickHandle = async (lang) => {
    await i18n.changeLanguage(lang);
  };
  const [nav, setNav] = useState(false);
  const handeClick = () => setNav(!nav);
  return (
    <div
      className="fixed w-full h-[80px] flex justify-between items-center
    px-4 bg-[#1f242d] text-gray-300"
    >
      <div>
      
      <motion.img
  ref={logo}
  initial={{ opacity: 0, y: 100 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.5 }}
  src={Logo}
  alt="Logo"
  className="relative left-0 w-48 top-0 p-0 m-0"
/>
      </div>

      {/* Menu */}

      <ul className="hidden md:flex  list-none menunavbar ">
      <motion.li
  ref={menu_item1}
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 1}}
  className="py-4 text-4xl"
>
  <Link to="home" smooth={true} offset={-20} duration={500}>
    {t("anasayfa")}
  </Link>
</motion.li>
       

<motion.li
  ref={menu_item1}
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 1}}
  className="py-4 text-4xl"
>
  <Link to="about" smooth={true} offset={-20} duration={500}>
  {t("hakkimda")}
  </Link>
</motion.li>


      

<motion.li
  ref={menu_item1}
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 1}}
  className="py-4 text-4xl"
>
  <Link to="skills" smooth={true} offset={-20} duration={500}>
  {t("yetenekler")}
  </Link>
  </motion.li>




     

<motion.li
  ref={menu_item1}
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 1}}
  className="py-4 text-4xl"
>
  <Link to="contact" smooth={true} offset={-20} duration={500}>
  {t("iletisim")}
  </Link>
  </motion.li>

  <motion.li
  ref={menu_item1}
  initial={{ opacity: 0, y: 0 }}
  animate={{ opacity: 1, y: 5 }}
  transition={{ duration: 0.5, delay: 1}}
  className="py-4 text-4xl"
>
  <img src={trbayragi} onClick={() => clickHandle("tr")} />
</motion.li>

<motion.li
  ref={menu_item1}
  initial={{ opacity: 0, y: 0 }}
  animate={{ opacity: 1, y: 9 }}
  transition={{ duration: 0.5, delay: 1}}
  className="py-4 text-4xl "
>
  <img src={itbayragi} onClick={() => clickHandle("it")} />
</motion.li>

<motion.li
  ref={menu_item1}
  initial={{ opacity: 0, y: 0 }}
  animate={{ opacity: 1, y: 7 }}
  transition={{ duration: 0.5, delay: 1}}
  className="py-4 text-4xl"
>
<img src={enbayragi} onClick={() => clickHandle("en")} />
</motion.li>

           </ul>


 {/* Hamburger */}
 <div
        className="md:hidden z-10 duration-300 flex gap-2 cursor-pointer "
        onClick={handeClick}> {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden mobilemenu  "
            : "absolute top-0 left-0 w-full h-screen bg-[#1f242d] flex flex-col justify-center items-center mobilemenu "
        }
      >
        <img src={Logo} alt="Logo" className="w-48" />
        <li className="py-4 text-4xl ">
          <Link
            onClick={handeClick}
            to="home"
            smooth={true}
            offset={-20}
            duration={500}
          >
            {t("anasayfa")}
          </Link>
        </li>
        <li className="py-4 text-4xl ">
          <Link
            onClick={handeClick}
            to="about"
            smooth={true}
            offset={-20}
            duration={500}
          >
            {t("hakkimda")}
          </Link>
        </li>
        <li className="py-4 text-4xl ">
          {" "}
          <Link
            onClick={handeClick}
            to="skills"
            smooth={true}
            offset={-170}
            duration={500}
          >
            {t("yetenekler")}
          </Link>
        </li>
        <li className="py-4 text-4xl ">
          {" "}
          <Link
            onClick={handeClick}
            to="contact"
            smooth={true}
            offset={-75}
            duration={500}
          >
            {t("iletisim")}
          </Link>
        </li>
        <li>
          {" "}
          <img
            className="mt-2"
            src={trbayragi}
            onClick={() => clickHandle("tr")}
          />
        </li>

        <li>
  <img
    src={itbayragi}
    className="mt-3"
    onClick={() => clickHandle("it")}
  />
</li>

        <li>
          {" "}
          <img
            src={enbayragi}
            className="mt-3"
            onClick={() => clickHandle("en")}
          />
        </li>
      </ul>


     

      <div className="hidden lg:flex fixed flex-col top-[25%] left-0">
        <ul>
         

<motion.li
  ref={menu_item1}
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 1}}
  className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px]  duration-300 bg-blue-600"
>
  <a
    href="https://www.facebook.com/baran.kayaalp.96"
    target="_blank"
    className="flex justify-between items-center w-full text-gray-300 "
  >
    Facebook <FaFacebook size={30} />
  </a>
</motion.li>

        


<motion.li
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 1 }}
  className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px]  duration-300 bg-sky-950"
>
  <a
    href="https://www.linkedin.com/in/baran-kayaalp-088898254/"
    target="_blank"
    className="flex justify-between items-center w-full text-gray-300"
  >
    Linkedln <FaLinkedinIn size={30} />
  </a>
</motion.li>

<motion.li
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 1 }}
  className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px]  duration-300 bg-[#333333]"
>
  <a
    href="https://github.com/BaranKayaalp"
    target="_blank"
    className="flex justify-between items-center w-full text-gray-300"
  >
    Github <FaGithub size={30} />
  </a>
</motion.li>

<motion.li
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 1 }}
  className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px]  duration-300 bg-[#6fc2b0]"
>
  <a
    href="mailto:barankayaalp@gmail.com"
    target="_blank"
    className="flex justify-between items-center w-full text-gray-300"
  >
    Email <HiOutlineMail size={30} />
  </a>
</motion.li>

<motion.li
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 1 }}
  className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px]  duration-300 bg-amber-800"
>
  <a
    href="https://www.instagram.com/brn.kylp"
    target="_blank"
    className="flex justify-between items-center w-full text-gray-300"
  >
    Instagram <FaInstagram size={30} />
  </a>
</motion.li>


        </ul>
      </div>
    </div>
  );
};

export default Nav;
