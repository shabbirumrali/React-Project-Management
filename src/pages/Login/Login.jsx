import { useState } from 'react'
import { useLogin } from '../../hooks/useLogin'
import './Login.css'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login, isPending, error } = useLogin()

  const handleSubmit = (e) => {
    e.preventDefault()
    login(email, password)
  }

  return (
    <form className='auth-form' onSubmit={handleSubmit} >
      <h2>Login</h2>
      <label>
        <span>Email: </span>
        <input required placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)} type="email" />        
      </label>
      <label>
        <span>Password: </span>
        <input required placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)} type="password" />        
      </label>
      <button type='submit' className='btn' disabled={isPending}>{isPending ? 'Loading...' : 'Login'}</button>
      {error && (<div className='error'> {error} </div>)} 
    </form>
  )
}

export default Login