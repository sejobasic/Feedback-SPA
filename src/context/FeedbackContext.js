import React, { useState, createContext } from 'react'
import { v4 as uuidv4 } from 'uuid'
import useSound from 'use-sound';
import boop1 from '../assets/boop1.wav'


const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'This is from context',
      rating: 10
    }
  ])
  const [deleteSound] =  useSound(boop1, { volume: 0.3 });

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

  const deleteFeedback = (id) => {
    deleteSound(feedback)
    setFeedback(feedback.filter((item) => item.id !== id))
}

  return (
    <FeedbackContext.Provider value={{
      feedback,
      deleteFeedback,
      addFeedback,
    }}>
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext