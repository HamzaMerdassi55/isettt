import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import InputGroup from './InputGroup'
import axios from 'axios'

function Update () {
  const [input, setInput] = useState({})
  const { id } = useParams()
  const history = useHistory()
  const [errors, setErrors] = useState({})

  const onChangeHandler = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  const onSubmitHandler = (e) => {
    e.preventDefault()
    axios.put(`/departement, ${id}`, input)
      .then(res => {
        history('/')
      })
      .catch(err => setErrors(err.response.data))
  }

  useEffect(async () => {
    await axios.get(`/departement/${id}`).then((res) => {
      setInput(res.data)
    })
  })
  return (

    <div class='modal' tabindex='-1' role='dialog'>
      <div class='modal-dialog' role='document'>
        <div class='modal-content'>
          <div class='modal-header'>
            <h5 class='modal-title'>Modal title</h5>
            <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
              <span aria-hidden='true'>&times;</span>
            </button>
          </div>
          <div class='modal-body' onSubmit={onSubmitHandler}>
            <InputGroup
              label='departement Title'
              type='text'
              name='Title'
              onChangeHandler={onChangeHandler}
              errors={errors.Title}
              value={input.Title}
            />
          </div>
          <div class='modal-footer'>
            <button type='submit' className='btn text-white full-width theme-bg'>submit</button>
            <button type='button' class='btn btn-secondary' data-dismiss='modal'>Close</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Update
