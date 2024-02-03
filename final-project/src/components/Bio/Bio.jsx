import React, { useEffect } from 'react'
import './bio.css'
import Left from '../left/left'
import Right from '../Right/Right'
import avatar from '../../assets/avatar.jpeg'
import getPhotoUrl from 'get-photo-url'
import { AiOutlinePlusSquare} from 'react-icons/ai'
import { db } from '../../dexie'
import { useLiveQuery } from 'dexie-react-hooks'
import { useState } from 'react'


const Bio = () => {


    const allPhoto = useLiveQuery(() => db.gallery.toArray(), [])

    const addPhoto =async () => {
        db.gallery.add ({
            url: await getPhotoUrl('#addPhotoInput')
        })
    }

    const removePhoto = (id) => {
      db.gallery.delete(id)
    }

    const [userDetails, setUserDetails ] = useState({
        name: "Obafemi Awolowo",
        about: "I am a software developer"
    }) 

    const [editFormIsOpen, setEditFormIsOpen] = useState(false)
    const [profilePhoto, setProfilePhoto ] = useState(avatar)

    useEffect (() => {
      const setDataFromDb = async () => {
        const userDetailsFromDb = await db.bio.get("info")
        const profilePhotoFromDb = await db.bio.get("profilePhoto")
        userDetailsFromDb && setUserDetails(userDetailsFromDb)
        profilePhotoFromDb && setProfilePhoto(profilePhotoFromDb)
      }

      setDataFromDb()
    }, [])
    
    const updateUserDetails = async (event) => {
      event.preventDefault()
      const objectData = {
        name: event.target.nameOfUser.value,
        about: event.target.aboutUser.value
      }

      setUserDetails(objectData)
      await db.bio.put(objectData, 'info')
      setEditFormIsOpen(false)
    }

    const updateProfilePhoto = async () => {
      const newProfilePhoto = await getPhotoUrl('#profilePhotoInput')
      setProfilePhoto(newProfilePhoto)
      await db.bio.put(newProfilePhoto, 'profilePhoto')
    }

    const editForm = (
      <form className='editForm' onSubmit={(e) => updateUserDetails(e)}>
        <input type="text"  name='nameOfUser' defaultValue={userDetails?.name} placeholder='Your Name'/>
        <input type="text"  name='aboutUser' defaultValue={userDetails?.name} placeholder='About You'/>
        <br />
        <button type='button' className='cancel-button' onClick={() => setEditFormIsOpen(false)}>Cancel</button>
        <button type='submit' className='cancel-button' > Save</button>
      </form>
    )

    const editButton = <button onClick={() => setEditFormIsOpen(true)}>Edit</button>


  return (
    <div className='usersPage'>
       <Left/> 
       <div id='sectionTwo'>
        <section className='bio'>
          <input type="file" accept='image/*' name='photo' id='profilePhotoInput' />
          <label htmlFor="profilePhotoInput" onClick={updateProfilePhoto}>
            <div className= 'profile-photo' role= 'button' title= 'click to edit photo'>
              <img src={profilePhoto} alt="" />
            </div>
          </label>
          <div className= 'profile-info'>
            <p className= 'name'>{userDetails.name}</p>
            <p className= 'about'>{userDetails.about}</p>

            {editFormIsOpen ? editForm : editButton}
          </div>
        </section>
        <div>
          <input type="file" name='photo' id='addPhotoInput' />
          <label htmlFor="addPhotoInput" className='plus' onClick={addPhoto}>
            <AiOutlinePlusSquare/>
          </label>
        </div>

        <section className='gallary'>
          {allPhoto?.map((photo) => {
            return (
              <div className='item' key={photo.id}>
                <img src={photo.url} className='item-image' alt="" />
                <div className='delete-button' onClick={() => removePhoto(photo.id)}>Delete</div>
              </div>
            )
          })}
        </section>
       </div>
       <Right/>
    </div>
  )
}

export default Bio