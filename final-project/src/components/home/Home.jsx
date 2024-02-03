import React from 'react'
import Gallery from '../Gallery/Gallery'
import Right from '../Right/Right'
import Left from '../left/left'
import './home.css'


const Home = () => {
  return (
    <div className='usersPage'>
        <div id='sectionOne'>
          <Left/>  
        </div>

        <div id='sectionTwo'>
            <Gallery/>
        </div>

        <div id='sectionThree'>
           <Right/>
        </div>
    </div>
  )
}

export default Home