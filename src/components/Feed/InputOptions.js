import React from 'react'
import './inputoption.css'

function InputOptions({Icon , title , color}) {
  return (
    <div className='inputOption'>
      <Icon className='icon' style={{color:color}}/>
      <h4 className='title'>{title}</h4>
    </div>
  )
}

export default InputOptions
