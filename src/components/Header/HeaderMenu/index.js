import React from "react";
import { motion, useCycle } from "framer-motion";

import Sidebar from "./Sidebar";

import "./headerMenu.css";

const HeaderMenu = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const variants = {
    open: { opacity: 1, x: -20 },
    closed: { opacity: 0.7, x: "100%" },
  };

  return (
    <div className="headerMenu">
      <motion.nav initial={false} animate={isOpen ? "open" : "closed"}>
        <motion.div className="background" variants={variants}>
          <Sidebar handleClick={() => toggleOpen()}/>
        </motion.div>
        <div className="headerButton" onClick={() => toggleOpen()}>
          <div className="headerBar1"></div>
          <div className="headerBar2"></div>
        </div>
      </motion.nav>
    </div>
  );
};

export default HeaderMenu;
