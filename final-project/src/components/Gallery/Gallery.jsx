import React from 'react'
import instagramSample from "../../assets/instagram-sample.jpg"
import ProfileData from '../profileData/ProfileData'
import { db } from '../../dexie'
import { useLiveQuery } from 'dexie-react-hooks'
import './Gallery.css'


const Gallery = () => {

  const allPhoto = useLiveQuery(() => db.gallery.toArray(), [])
  return (
    <div className='--gaellery-page'>
      <ProfileData/>
      <section className='gallary'>
        {allPhoto?.map((photo) => {
          return (
            <div className='item' key={photo.id}>
              <img src={photo.url} className='item-image' alt="" />
            </div>
          )
        })}
      </section>
    </div>
  )
}

export default Gallery