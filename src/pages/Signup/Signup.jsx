import { useState } from 'react'
import { useSignup } from '../../hooks/useSignup'
import './Signup.css'

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [thumbnail, setThumbnail] = useState(null)
  const [thumbnailError, setThumbnailError] = useState(null)
  const { signup, error, isPending } = useSignup()

  const handleSubmit = (e) => {
    e.preventDefault()

    signup(email, password, displayName, thumbnail)
  }

  const handleFileChange = (e) => {
    setThumbnail(null)
    let selected = e.target.files[0]

    if(!selected) {
      setThumbnailError('Please Select a file')
      return
    }

    if(!selected.type.includes('image')) {
      setThumbnailError('Selected file must be an image')
      return
    }

    if(selected.size > 100000) {
      setThumbnailError('Image file size must be less then 100kb')
      return
    }

    setThumbnailError(null)
    setThumbnail(selected)

    console.log('thumbnail updated')
  }

  return (
    <form className='auth-form' onSubmit={handleSubmit} >
      <h2>Sign up</h2>
      <label>
        <span>Email: </span>
        <input required placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)} type="email" />        
      </label>
      <label>
        <span>Password: </span>
        <input required placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)} type="password" />        
      </label>
      <label>
        <span>Display Name: </span>
        <input required placeholder='Enter your name' value={displayName} onChange={(e) => setDisplayName(e.target.value)} type="text" />        
      </label>
      <label>
        <span>Profile Thumbnail: </span>
        <input type="file" required onChange={handleFileChange} />
        {thumbnailError&& (<div className='error'>{thumbnailError}</div>)} 
      </label>
      <button type='submit' className='btn' disabled={isPending}>{isPending ? 'Loading...' : 'Sign up'}</button>
      {error && (<div className='error'> {error} </div>)} 
    </form>
  )
}

export default Signup