import React from 'react'
import Card from './Card'
import { FaTimes } from 'react-icons/fa'

function FeedbackItem({ item, handleDelete }) {
  
  return (
    <Card reverse={true}>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => handleDelete(item.id)} className="close">
        <FaTimes color='#f07167'  />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  )
}

export default FeedbackItem