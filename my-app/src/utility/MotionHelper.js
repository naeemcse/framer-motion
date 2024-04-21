export const topToBottom = {
    initial : { opacity: 0, y : "-100vh" },
    animate:{
        opacity: 1, y: 0 },
    transition :{
        duration: 2
    }
}
export const bottomToTop = {
    initial : {
        opacity: 0,y: "100vh"
    },
    animate:{
        opacity: 1, y
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