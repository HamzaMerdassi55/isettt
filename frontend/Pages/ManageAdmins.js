import React, { useEffect, useState } from 'react'
import RowDetails from '../components/Admin/RowDetails'
import InputGroup from '../components/Admin/InputGroup'
import axios from 'axios'
import Alert from '../components/Alert'

function ManageAdmins () {
  const [admins, setAdmins] = useState([])
  const [input, setInput] = useState({})
  const [errors, setErrors] = useState({})
  const [message, setMessage] = useState('')
  const [show, setShow] = useState(false)

  const onChangeHandler = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
    console.log(input)
  }

  const onSubmitHandler = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3000/admins', input)
      .then(res => {
        setMessage(res.data.message)
        setShow(true)
        setTimeout(() => {
          setShow(false)
        }, 4000)
      })
      .catch(err => setErrors(err.response.data))
  }

  /* delete */
  const OnDelete = (id__) => {
    if (window.confirm('are you sure to delete this admin')) {
      axios.delete(`http://localhost:3000/admins/${id__}`)
        .then(res => {
          setMessage(res.data.message)
          setShow(true)
          setTimeout(() => {
            setShow(false)
          }, 4000)
        })
    }
  }

  // find all category
  useEffect(async () => {
    await axios.get('http://localhost:3000/admins')
      .then(res => {
        setAdmins(res.data)
      })
  })

  return (
    <div className='col-lg-9 col-md-9 col-sm-12'>
      <Alert message={message} show={show} />

      {/* Row */}
      <div className='row justify-content-between'>
        <div className='col-lg-12 col-md-12 col-sm-12 pb-4'>
          <div className='dashboard_wrap d-flex align-items-center justify-content-between'>
            <div className='arion'>
              <nav className='transparent'>
                <ol className='breadcrumb'>
                  <li className='breadcrumb-item'><a href='#'>Home</a></li>
                  <li className='breadcrumb-item active' aria-current='page'>Manage Admins</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-xl-12 col-lg-12 col-md-12'>
          <div className='dashboard_wrap'>
            <div className='form_blocs_wrap'>
              <form onSubmit={onSubmitHandler}>
                <div className='row justify-content-between'>
                  <div className='form-row'>
                    <div className='col-md-4'>
                      {/* Basic */}
                      <InputGroup
                        label='First name'
                        type='text'
                        name='FirstName'
                        onChangeHandler={onChangeHandler}
                        errors={errors.FirstName}
                      />
                      <InputGroup
                        label='Last name'
                        type='text'
                        name='LastName'
                        onChangeHandler={onChangeHandler}
                        errors={errors.LastName}
                      />
                    </div>
                    {/* login */}
                    <div className='col-md-4'>
                      <InputGroup
                        label='Email'
                        type='text'
                        name='Email'
                        onChangeHandler={onChangeHandler}
                        errors={errors.Email}
                      />
                      <InputGroup
                        label='Password'
                        type='password'
                        name='Password'
                        onChangeHandler={onChangeHandler}
                        errors={errors.Password}
                      />
                    </div>
                    <div className='col-md-4'>

                      <InputGroup
                        label='Admin Image'
                        type='file'
                        name='Photo'
                        onChangeHandler={onChangeHandler}
                        errors={errors.Photo}
                      />
                    </div>

                    <button type='submit' className='btn theme-bg text-white'>submit</button>

                  </div>
                </div>
              </form>
            </div>

          </div>

        </div>
      </div>
      {/* /Row */}
      <div className='row'>
        <div className='col-xl-12 col-lg-12 col-md-12'>
          <div className='dashboard_wrap'>
            <div className='row'>
              <div className='col-xl-12 col-lg-12 col-md-12 mb-4'>
                <h6 className='m-0'>All Admin List</h6>
              </div>
            </div>
            <div className='row'>
              <div className='col-xl-12 col-lg-12 col-md-12 mb-2'>
                <div className='table-responsive'>
                  <table className='table dash_list'>
                    <thead>
                      <tr>
                        <th scope='col'>Id</th>
                        <th scope='col'>FirstName</th>
                        <th scope='col'>Lastname</th>
                        <th scope='col'>Email</th>
                        <th scope='col'>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        admins.map(({ FirstName, LastName, Email, _id }) => (
                          <RowDetails FirstName={FirstName} LastName={LastName} Email={Email} Id={_id} OnDelete={OnDelete} />
                        ))
                      }

                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className='row align-items-center justify-content-between'>
              <div className='col-xl-6 col-lg-6 col-md-12'>
                <p className='p-0'>Showing 1 to 15 of 15 entire</p>
              </div>
              <div className='col-xl-6 col-lg-6 col-md-12'>
                <nav className='float-right'>
                  <ul className='pagination smalls m-0'>
                    <li className='page-item disabled'>
                      <a className='page-link' href='#' tabIndex={-1}><i className='fas fa-arrow-circle-left' /></a>
                    </li>
                    <li className='page-item'><a className='page-link' href='#'>1</a></li>
                    <li className='page-item active'>
                      <a className='page-link' href='#'>2 <span className='sr-only'>(current)</span></a>
                    </li>
                    <li className='page-item'><a className='page-link' href='#'>3</a></li>
                    <li className='page-item'>
                      <a className='page-link' href='#'><i className='fas fa-arrow-circle-right' /></a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
export default ManageAdmins
