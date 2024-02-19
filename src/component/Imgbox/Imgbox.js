import React from 'react'
import img1 from '../../data/img.svg'
import img2 from '../../data/img1.svg'
import img3 from '../../data/img2.svg'
import img4 from '../../data/img3.svg'
import img5 from '../../data/img4.svg'
import img6 from '../../data/img5.svg'
import img7 from '../../data/img6.svg'
import img8 from '../../data/img7.svg'
import Images from './Images'


export default function Imgbox() {
  return (
    <div className='img-box'>
      <div className='two-image'>
        <Images value = {img1} />
        <Images value = {img2} />
      </div>
      <div className='two-image'>
        <Images value = {img3} />
        <Images value = {img4} />
      </div>
      <div className='two-image'>
        <Images value = {img5} />
        <Images value = {img6} />
      </div>
      <div className='two-image'>
        <Images value = {img7} />
        <Images value = {img8} />
      </div>
    </div>
  )
}
