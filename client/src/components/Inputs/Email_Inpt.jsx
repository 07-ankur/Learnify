import React from 'react'
import "./Email_Inpt.css";

const Email_Inpt = ({setEmail}) => {

  return (
    <div className='input mt-1'>
        <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your E-mail Here"
        />
    </div>
  )
}

export default Email_Inpt