import './sidetab.css'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { ROUTES } from './assets/const'
import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

function Sidetab() {

  const [isScrolled, setIsScrolled] = useState(false);

  const [active,setactive] = useState(false);

  const location = useLocation();

  const navigation = useNavigate();

  const ishome = location.pathname === "/";

  const pick = location.pathname === "/" || "/Room333" || "Room350";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const tap = () => {
    setactive(!active);
  }

  useEffect(() => {
    setactive(false);
  },[location])

  const home = () => {
    navigation(ROUTES.HOME);
  }

  const room301 = () => {
    navigation(ROUTES.BUTURI);
  }

  const room302 = () => {
    navigation(ROUTES.CLASS);
  }

  const butumu = () => {
    navigation(ROUTES.BUTUMU);
  }

  const katudou = () => {
    navigation(ROUTES.KATUDOU);
  }

  return (
    <div className = {pick ? "canSide" : ""}>
      <h1 id="title" className={ishome && !isScrolled ? "" : "small"} onClick={home}>物理部展</h1>
      <div className="menu">
        <div className={active ? "close" : "more"} onClick={tap}>
          <div className="tapbar" id="bar1"/>
          <div className="tapbar" id="bar2"/>
          <div className="tapbar" id="bar3"/>
        </div>
        <ul className={active ? "active" : ""}>
          <motion.li
          initial={{x: 30, opacity: 0}}
          whileInView={{x: 0, opacity: 1,transition: {duration: 0.3, delay: 0.3}}}
          transition={{duration: 0, delay: 0}}
          onClick={home}>
            <h3>Home</h3>
            <p>(ホームに戻る)</p>
          </motion.li>
          <motion.li
          initial={{x: 30, opacity: 0}}
          whileInView={{x: 0, opacity: 1,transition: {duration: 0.3, delay: 0.4}}}
          transition={{duration: 0, delay: 0}}
          onClick={room301}>
            <h3>Room 350</h3>
            <p>(350教室)</p>
          </motion.li>
          <motion.li
          initial={{x: 30, opacity: 0}}
          whileInView={{x: 0, opacity: 1,transition: {duration: 0.3, delay: 0.5}}}
          transition={{duration: 0, delay: 0}}
          onClick={room302}>
            <h3>Room 333</h3>
            <p>(333教室)</p>
          </motion.li>
        </ul>
      </div>
    </div>
  )
}

export default Sidetab