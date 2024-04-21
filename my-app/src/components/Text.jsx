import React from 'react';
import  {motion} from "framer-motion";

const Text = () => {
    const massage = " I am najmu islam Naeem . I am from Sherpur"
    const array = massage.split(" ") ;

    return (
        <div>
            {
                array.map((item, i) => (
                    <motion.span key={i}
                    initial={{opacity:0}}
                                 animate={{opacity:1}}
                                 transition={{duration:1,
                                  delay:i/10,
                                     }}

                    > {item} </motion.span>
                ))
            }


        </div>
    );
};

export default Text;