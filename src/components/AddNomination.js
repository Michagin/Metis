import { useState } from 'react'

function AddNomination ({ onAdd }) {
    const [title, setTitle] = useState('')
    const [year, setYear] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if (!title) {
            alert('Please nominate a game.')
            return
        }

        onAdd({ title, year })
        
        // clear text on submit
        setTitle('')
        setYear('')
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
          <div className='form-control'>
            <label>Title</label>
            <input
              type='text'
              placeholder='Nominate Game'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className='form-control'>
            <label>Release year</label>
            <input
              type='number'
              placeholder='2021'
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
          </div>
    
          <input type='submit' value='Save Task' className='btn btn-block' />
        </form>
        
    )
}

export default AddNomination
