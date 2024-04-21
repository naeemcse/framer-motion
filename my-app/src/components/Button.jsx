import React from 'react';
import {motion} from "framer-motion";

const Button = () => {
    return (
        <div>
            <motion.button
                className=" bg-green-200 border rounded-md p-4"
                whileTap={{scale: 0.5}}
                whileHover={{scale: 1.5}}
            >
                Click me
            </motion.button>
            <motion.button
                className=" bg-green-200 border rounded-md p-4"
                whileTap={{scale: 0.5}}
                whileHover={{scale: 1.5,
                transition:{yoyo:Infinity} // smothly
            }}
            >
                Click me
            </motion.button>
        </div>
    );
};

export default Button;