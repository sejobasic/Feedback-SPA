import React from 'react'
import Card from '../components/Card'
import { Link } from 'react-router-dom'

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About This Project</h1>
        <p>This is a React app to leave feedback for a product or service</p>
        <p>
          <Link to='/'>Back to Home Page</Link>
        </p>
      </div>
    </Card>
  )
}

export default AboutPage