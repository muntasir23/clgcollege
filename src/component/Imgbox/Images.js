import React from 'react'
import './Imges.css'

export default function Images(props) {
    const {value} = props 
  return (
    <div className='img-box-single'> 
      <img src={value} alt='' />
    </div>
  )
}
