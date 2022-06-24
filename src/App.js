import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './pages/AboutPage'
import { FeedbackProvider } from './context/FeedbackContext'
import AboutLink from './components/AboutLink'


function App() {

  return (
    <FeedbackProvider>
      <Router>
        <Header text='Feedback App' />
        <div className='container'>
          <Routes>
            <Route exact path='/' element={
              <>
                <FeedbackForm />
                <FeedbackStats />
                <FeedbackList />
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