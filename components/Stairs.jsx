
import { motion, animate } from 'framer-motion';

const stairAnimation = {
    initial: {
        top: '0%',
    },
    animate: {
        top: '100%',
    },
    exit: {
        top: ['100%', '0%'],
    },
}

// calculate the number of stairs
const reverseIndex = (index) => {
    const totalSteps = 6;
    return totalSteps - index;
}

const Stairs = () => {
    return <>
        {/* render 6 motion divs , each with the stairAnimation  a step of stairs*/}
        {[...Array(6)].map((_, index) => (
            <motion.div key={index} variants={stairAnimation}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                    delay: reverseIndex(index) * 0.1,
                }}
                className='h-full bg-white w-full relative'
            ></motion.div>
        ))}
    </>
}

export default Stairs;
