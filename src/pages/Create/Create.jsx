import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import { useCollection } from '../../hooks/useCollection'

import './Create.css'

const catagories = [
  {value: 'development', label: 'Development'},
  {value: 'design', label: 'Design'},
  {value: 'sales', label: 'Sales'},
  {value: 'marketing', label: 'Marketing'},
]

const Create = () => {
  const { documents } = useCollection('users')
  const [users, setUsers] = useState([])
  const [formError, setFormError] = useState(null)
  
  // Form field values
  const [name, setName] = useState('')
  const [details, setDetails] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [category, setCategory] = useState('')
  const [assignedUsers, setAssignedUsers] = useState([])
  

  useEffect(() => {
    if(documents) {
      const options = documents.map(user => {
        return { value: user, label: user.displayName }
      })
      setUsers(options)
    }
  }, [documents])
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setFormError(null)
    if(!category){
      setFormError('Category should not be empty')
      return
    } 
    if(!assignedUsers.length) {
      setFormError('Please assign the people for this project, At least one')
      return
    }
    console.log(name, details, dueDate, category.value, assignedUsers)
  }

  return (
    <div className='create-form'>
      <h2 className='page-title'>Create a new Project</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Project name:</span>
          <input required type="text" value={name} onChange={e => setName(e.target.value)} />
          
        </label>
        <label>
          <span>Project detail:</span>
          <textarea value={details} onChange={e => setDetails(e.target.value)} required></textarea>
        </label>
        <label>
          <span>Set due date:</span>
          <input type="date" value={dueDate} onChange={e => setDueDate(e.target.value)} required />
        </label>
        <label>
          <span>Project category:</span>
          {/* catagory select here */}
          <Select

            options={catagories}
            onChange={(option) => setCategory(option)}
          />
        </label>
        <label>
          <span>Assign to: </span>
          {/* asign select here */}
          <Select
          options={users}
          isMulti
          onChange={(option) => setAssignedUsers(option)} />
        </label>
        <button className='btn'>Add Project</button>

        {formError && (<p className='error'>{formError}</p>)}
      </form>
    </div>
  )
}

export default Create