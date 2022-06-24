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
    },
    {
      id: 2,
      text: 'This is from context',
      rating: 5
    }
  ])
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
  })
  const [deleteSound] =  useSound(boop1, { volume: 0.3 });

  // Add new feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

  // Delete feedback
  const deleteFeedback = (id) => {
    deleteSound(feedback)
    setFeedback(feedback.filter((item) => item.id !== id))
  }

  // Update feedback item
  const updateFeedback = (id, updItem) => {
    setFeedback(feedback.map((item) => 
    item.id === id ? {...item, ...updItem} : item))
  }

  // Set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true
    })
  }

  return (
    <FeedbackContext.Provider value={{
      feedback,
      feedbackEdit,
      deleteFeedback,
      addFeedback,
      editFeedback,
      updateFeedback,
    }}>
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext