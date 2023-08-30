import React from 'react'
import './SignUp_btn.css'

export default function SignUp_btn({label,functionHandler}) {
  return (
    <button onClick={functionHandler} className="button-36">
      {label}
    </button>
  )
}