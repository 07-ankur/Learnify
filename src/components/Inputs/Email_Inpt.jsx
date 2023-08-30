import React from 'react'
import { useState } from 'react';
import "./Email_Inpt.css";

const Email_Inpt = () => {
    const [email, setEmail] = useState('');
  return (
    <div className='input mt-1'>
        <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your E-mail Here"
        />
    </div>
  )
}

export default Email_Inpt