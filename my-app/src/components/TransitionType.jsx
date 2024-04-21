import React from 'react';
import {animate, motion} from "framer-motion";
import {topToBottom,bottomToTop} from "../utility/MotionHelper.js";

const TransitionType = () => {
    const leftToRight = {
        initial : { opacity: 0, x : "-100vh" },
    animate:{
        opacity: 1, x: 0 },
    transition :{
      duration: 2
    }
}
    const rightToLeft = {
        initial : {
            opacity: 0, x : "100vh"
        },
        animate:{
            opacity: 1, x
                :
                0
        },
        transition :{

            type:'spring', bounce
                :
                0.5, duration
                :
                2
        }
    }
    return (
        <>
            {/* Transition from x axis left to right  */}
            <motion.div
                className="m-4"
                initial={{opacity: 0, x: "-100vh"}}
                animate={{opacity: 1, x: 0}}
                transition={{duration: 2}}
            >
                <h1>Learing Animation</h1>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                    leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                    with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                </p>
            </motion.div>

            {/* Transition from x axis right to left   */}
            <motion.div
                className="m-4"
                initial={{opacity: 0, x: "100vh"}}
                animate={{opacity: 1, x: 0}}
                transition={{duration: 2}}
            >
                <h1>Learing Animation</h1>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                    leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                    with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                </p>
            </motion.div>

            {/* Transition from x axis right to left   with Type spring  “ */}
            <motion.div
                className="m-4"
                initial={{opacity: 0, x: "-100vh"}}
                animate={{opacity: 1, x: 0}}
                transition={{type: 'spring', duration: 2}}
            >
                <h1>Learing Animation</h1>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                    leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                    with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                </p>
            </motion.div>

            {/* Transition from x axis right to left   with Type spring   and Bounce “ */}
            <motion.div
                className="m-4"
                initial={{opacity: 0, x: "-100vh"}}
                animate={{opacity: 1, x: 0}}
                transition={{type: 'spring', bounce: 0.5, duration: 2}}
            >
                <h1>Learing Animation</h1>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                    leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                    with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                </p>
            </motion.div>


            {/*Variante */}
            {/* Transition from x axis right to left   with Type spring   and Bounce “ */}
            <motion.div
                className="m-4"

            >
                <h1>Learing Animation</h1>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                    leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                    with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </motion.div>

            {/* Using Variant  */}
            <motion.h1 className="text-2xl font-bold m-4"
                       variants={leftToRight}
                       initial="initial"
                       animate="animate"
            >
                Left To Right
            </motion.h1>
            {/* Using Variant  */}
            <motion.h1 className="text-2xl font-bold m-4"
                       variants={rightToLeft}
                       initial="initial"
                       animate="animate"
            >
                Right to left
            </motion.h1>

            {/* Variants comes from Utility's external file */}
            <motion.h1 className="text-2xl font-bold m-4"
                       variants={topToBottom}
                       initial="initial"
                       animate="animate"
            >
                Top to Bottom
            </motion.h1>

            <motion.h1 className="text-2xl font-bold m-4"
                       variants={bottomToTop}
                       initial="initial"
                       animate="animate"
            >
                 Bottom to Top
            </motion.h1>


        </>
    );
};

export default TransitionType;