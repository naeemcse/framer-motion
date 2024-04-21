import React from 'react';
import  {motion} from "framer-motion";

const Keyframe = () => {
    return (
        <>
        <motion.div
            className="bg-blue-500 border w-32 h-32 m-4 mt-10"
            animate={{borderRadius:['20%',"20%",'50%',"50%" , "20%"],
            rotate:[ 0 , 90 , 180 , 270 , 0] ,
            //     scale: [ 1 ,1, 2, 2,1]
            //     এরেতে যজগুলো উপাদান আছে ততটা ব্রেক পয়েন্ট
            }}
            transition={{duration:2}}
        />
</>
    )

};

export default Keyframe;