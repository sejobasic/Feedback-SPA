import React, { useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Spinner from './Spinner'
import FeedbackItem from './FeedbackItem'
import FeedbackContext from '../context/FeedbackContext'


function FeedbackList() {
  const { feedback, isLoading } = useContext(FeedbackContext)

  // if its not loading and no feedback then we want to show no feedback
  if(!isLoading && (!feedback || feedback.length === 0)) {
    return <p className='no-feedback'>No Feedback Yet</p>
  }

  const animation = {
    hidden: {
      opacity: 0,
      y: '-5vh'
    },
    visible: {
      opacity: 1,
      y: '0',
      transition: {
        duration: 0.1, 
        type: "spring", 
        stiffness: 500, 
        damping: 25
      }
    },
    exit: {
      opacity: 0
    }
  }

  return (
    isLoading ? ( 
        <Spinner />
      ) : (
      <div className='feedback-list'>
        <AnimatePresence>
          {feedback.map((item) => (
            <motion.div 
              key={item.id}
              variants={animation}
              initial='hidden'
              animate='visible'
              exit='exit'
            >
              <FeedbackItem 
                key={item.id} 
                item={item}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    )
  )
}

export default FeedbackList