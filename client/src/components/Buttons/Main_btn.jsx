import React from 'react'
import './Main_btn.css'

export default function Main_btn({label,functionHandler}) {
  return (
    <button onClick={functionHandler} className="btnfos1 btnfos-5">
      {label}
    </button>
  )
}