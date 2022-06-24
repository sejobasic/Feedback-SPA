import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FeedbackItem from './FeedbackItem'


function FeedbackList({ feedback, handleDelete }) {
  if(!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>
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
              handleDelete={handleDelete}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

export default FeedbackList