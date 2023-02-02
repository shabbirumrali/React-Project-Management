import React from 'react'
import { useCollection } from '../../hooks/useCollection'
import Avatar from '../Avatar/Avatar'

import './OnlineUsers.css'

const OnlineUsers = () => {
    const { documents, error } = useCollection('users')
  return (
    <div className='user-list'>
        <h2>All users</h2>
        {error && (
            <div className='error'>{error}</div>
        )}
        {documents && documents.map((user) => (
            <div className='user-list-item' key={user.id}>
                {user.online && <span className='online-user'></span> }
                <span>{user.displayName}</span>
                <Avatar src={user.photoURL} />
            </div>
        ))}
    </div>
  )
}

export default OnlineUsers