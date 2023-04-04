import { motion } from 'framer-motion'

const animation = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: .5
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: .5
    }
  },
}

const AnimatedComponent = ({ children }) => {
  return (
    <motion.div variants={animation} initial="hidden" animate="visible" exit="exit" >
      {children}
    </motion.div>
  )
}

export default AnimatedComponent