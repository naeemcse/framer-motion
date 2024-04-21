import React from 'react';
import { motion, useScroll } from "framer-motion"
const ScrollSign = () => {
    const { scrollYProgress } = useScroll();
    return (
        <motion.div className="bg-green-500 fixed h-2.5 origin-[0%] top-0 inset-x-0" style={{scaleX: scrollYProgress}}/>
    );
};

export default ScrollSign;