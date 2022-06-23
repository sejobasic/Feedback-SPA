import React from 'react'

function FeedbackStats({ feedback }) {

  // Calculate ratings average
  let averageRating = feedback.reduce((acc, curr) => {
    return acc + curr.rating
  }, 0) / feedback.length

  // set one decimal place, remove trailing zeros
  averageRating = averageRating.toFixed(1).replace(/[.,]0$/, '')

  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(averageRating) ? 0 : averageRating}</h4>
    </div>
  )
}

export default FeedbackStats