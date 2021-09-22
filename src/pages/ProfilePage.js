import React from 'react'
import { useParams } from 'react-router'

const ProfilePage = () => {
  const { username } = useParams()

  return (
    <div>
      Profile: {username}
    </div>
  )
}

export default ProfilePage
