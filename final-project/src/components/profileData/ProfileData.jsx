import React from 'react'
import './profiledata.css'
import imageOne from '../../assets/image1.jpg'
import imageTwo from '../../assets/image2.jpg'
import imageThree from '../../assets/image3.jpg'
import imageFour from '../../assets/image4.jpg'
import imageFive from '../../assets/image5.jpg'

const ProfileData = () => {
  return (
    <div className='--gallery-profileImage'>
        <div>
            <img src={imageThree} alt="" />
            <h4 style={{fontSize: '10px'}}>Ismail_01</h4>
        </div>

        <div>
            <img src={imageTwo} alt="" />
            <h4 style={{fontSize: '10px'}}>Ismail_01</h4>
        </div>

        <div>
            <img src={imageFour} alt="" />
            <h4 style={{fontSize: '10px'}}>Ismail_01</h4>
        </div>
        <div>
            <img src={imageTwo} alt="" />
            <h4 style={{fontSize: '10px'}}>Ismail_01</h4>
        </div>
        
        <div>
            <img src={imageThree} alt="" />
            <h4 style={{fontSize: '10px'}}>Ismail_01</h4>
        </div>

        <div>
            <img src={imageFive} alt="" />
            <h4 style={{fontSize: '10px'}}>Ismail_01</h4>
        </div>

        <div>
            <img src={imageTwo} alt="" />
            <h4 style={{fontSize: '10px'}}>Ismail_01</h4>
        </div>
        <div>
            <img src={imageThree} alt="" />
            <h4 style={{fontSize: '10px'}}>Ismail_01</h4>
        </div>
        <div>
            <img src={imageFour} alt="" />
            <h4 style={{fontSize: '10px'}}>Ismail_01</h4>
        </div>
        
    </div>
  )
}

export default ProfileData