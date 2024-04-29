import React from 'react'
import './alert.scss'

export default function alert() {
  return (
      <div className="alert alert--error">
      <p className="alert__message">This is a message</p>
      <ul className="alert__details">
        <li className="alert__details">This is detail 1</li>
        <li className="alert__details">This is detail 2</li>
        <li className="alert__details">This is detail 3</li>
      </ul>
    </div>
  )
}
