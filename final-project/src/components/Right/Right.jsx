import React from 'react'
import './Right.css'
import { MdVerified } from "react-icons/md";
import imageTwo from '../../assets/image2.jpg'
import imageThree from '../../assets/image3.jpg'
import imageFour from '../../assets/image4.jpg'
import imageFive from '../../assets/image5.jpg'

const Right = () => {
  return (
    <div className='--right-main-page'>
      <div className='--right-page'>
        <div className='--right-users'>
          <img src={imageTwo} alt="" />
          <div>
            <div style={{display: 'flex', gap: '5px'}}>
              <h4 style={{fontSize: '10px', marginTop: '10px', fontWeight: '900'}}>Ismail  </h4>
              <h4 style={{marginTop: '6px'}}> <MdVerified color='blue' size={16}/></h4>
            </div>
            <h4 style={{fontSize: '10px', fontWeight: '900', marginTop: '-4px'}}>Popular</h4>
          </div>
        </div> 
        <div>
            <h4 style={{marginTop: '10px', marginRight: '10px', color: 'blue'}}>Following</h4>
        </div>
      </div> 

      <div className='--right-page'>
        <div className='--right-users'>
          <div>
            <h4 style={{marginTop: '10px'}}>Suggested For You</h4>
          </div>
        </div> 
        <div>
            <h4 style={{marginTop: '10px', marginRight: '10px'}}>See All</h4>
        </div>
      </div> 

      <div className='--right-page'>
        <div className='--right-users'>
          <img src={imageFive} alt="" />
          <div>
          <div style={{display: 'flex', gap: '5px'}}>
              <h4 style={{fontSize: '10px', marginTop: '10px', fontWeight: '900'}}>Ismail  </h4>
              <h4 style={{marginTop: '6px'}}> <MdVerified color='blue' size={16}/></h4>
            </div>
            <h4 style={{fontSize: '10px', fontWeight: '900', marginTop: '-4px'}}>Popular</h4>
          </div>
        </div> 
        <div>
            <h4 style={{marginTop: '10px', marginRight: '10px', color: 'blue'}}>Follow</h4>
        </div>
      </div> 

      <div className='--right-page'>
        <div className='--right-users'>
          <img src={imageFour} alt="" />
          <div>
          <div style={{display: 'flex', gap: '5px'}}>
              <h4 style={{fontSize: '10px', marginTop: '10px', fontWeight: '900'}}>Ismail  </h4>
              <h4 style={{marginTop: '6px'}}> <MdVerified color='blue' size={16}/></h4>
            </div>
            <h4 style={{fontSize: '10px', fontWeight: '900', marginTop: '-4px'}}>Popular</h4>
          </div>
        </div> 
        <div>
            <h4 style={{marginTop: '10px', marginRight: '10px', color: 'blue'}}>Follow</h4>
        </div>
      </div> 

      <div className='--right-page'>
        <div className='--right-users'>
          <img src={imageThree} alt="" />
          <div>
            <h4 style={{fontSize: '10px', marginTop: '10px', fontWeight: '900'}}>Ismail</h4>
            <h4 style={{fontSize: '10px', fontWeight: '900'}}>Popular</h4>
          </div>
        </div> 
        <div>
            <h4 style={{marginTop: '10px', marginRight: '10px', color: 'blue'}}>Follow</h4>
        </div>
      </div> 
      
    </div>
  )
}

export default Right