import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import FeedbackData from './data/FeedbackData'
import AboutPage from './pages/AboutPage'
import { FeedbackProvider } from './context/FeedbackContext'
import AboutLink from './components/AboutLink'
import useSound from 'use-sound';
import boop1 from './assets/boop1.wav'


function App() {
  const [feedback, setFeedback] = useState(FeedbackData)
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
    <FeedbackProvider>
      <Router>
        <Header text='Feedback App' />
        <div className='container'>
          <Routes>
            <Route exact path='/' element={
              <>
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
                <AboutLink />
              </>
            }>
            </Route>
            <Route path='/about' element={<AboutPage />}/>
          </Routes>
        </div>
      </Router>
    </FeedbackProvider>
  )
}

export default App