import React, { useState } from 'react'
import InputGroup from '../Components/Admin/InputGroup'
import axios from 'axios'
import Alert from '../components/Alert'

function AddAdmin () {
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

  return (
    <div className='col-lg-9 col-md-9 col-sm-12'>
      <Alert message={message} show={show} />
      <div className='row justify-content-between'>
        <div className='col-lg-12 col-md-12 col-sm-12 pb-4'>
          <div className='dashboard_wrap d-flex align-items-center justify-content-between'>
            <div className='arion'>
              <nav className='transparent'>
                <ol className='breadcrumb'>
                  <li className='breadcrumb-item'><a href='#'>Home</a></li>
                  <li className='breadcrumb-item active' aria-current='page'>Add New Admin</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* /Row */}
      <div className='row'>
        <div className='col-xl-12 col-lg-12 col-md-12'>
          <div className='dashboard_wrap'>
            <div className='form_blocs_wrap'>
              <form onSubmit={onSubmitHandler}>
                <div className='row justify-content-between'>
                  <div className='col-xl-3 col-lg-4 col-md-5 col-sm-12'>
                    <div className='nav flex-column nav-pills me-3' id='v-pills-tab' role='tablist' aria-orientation='vertical'>
                      <button className='nav-link active' id='v-pills-basic-tab' data-toggle='pill' data-target='#v-pills-basic' type='button' role='tab' aria-controls='v-pills-basic' aria-selected='true'>Basic</button>
                      <button className='nav-link' id='v-pills-login-tab' data-toggle='pill' data-target='#v-pills-login' type='button' role='tab' aria-controls='v-pills-login' aria-selected='false'>Login Details</button>
                      <button className='nav-link' id='v-pills-finish-tab' data-toggle='pill' data-target='#v-pills-finish' type='button' role='tab' aria-controls='v-pills-finish' aria-selected='false'>Finish</button>
                    </div>
                  </div>
                  <div className='col-xl-9 col-lg-8 col-md-7 col-sm-12'>
                    <div className='tab-content' id='v-pills-tabContent'>
                      {/* Basic */}
                      <div className='tab-pane fade show active' id='v-pills-basic' role='tabpanel' aria-labelledby='v-pills-basic-tab'>
                        <div className='form-group smalls'>
                          <label>First Name</label>
                          <InputGroup
                            label='First name'
                            type='text'
                            name='Firstname'
                            onChangeHandler={onChangeHandler}
                            errors={errors.Firstname}
                          />
                        </div>
                        <div className='form-group smalls'>
                          <label>Last Name</label>
                          <InputGroup
                            label='Last name'
                            type='text'
                            name='Lastname'
                            onChangeHandler={onChangeHandler}
                            errors={errors.Lastname}
                          />
                        </div>
                        <div className='form-group smalls'>
                          <label>Admin Image</label>
                          <div className='custom-file'>
                            <InputGroup
                              label='Admin Image'
                              type='file'
                              name='Photo'
                              onChangeHandler={onChangeHandler}
                              errors={errors.Photo}
                            />
                            <label className='custom-file-label' htmlFor='customFile'>Choose file</label>
                          </div>
                        </div>
                        <div className='d-flex align-items-center justify-content-center'>
                          <ul className='alios_slide_nav'>
                            <li><a href='#' className='btn btn_slide disabled'><i className='fas fa-arrow-left' /></a></li>
                            <li><a href='#' className='btn btn_slide'><i className='fas fa-arrow-right' /></a></li>
                          </ul>
                        </div>
                      </div>
                      {/* login */}
                      <div className='tab-pane fade' id='v-pills-login' role='tabpanel' aria-labelledby='v-pills-login-tab'>
                        <div className='form-group smalls'>
                          <label>Email</label>
                          <InputGroup
                            label='Email'
                            type='text'
                            name='Email'
                            onChangeHandler={onChangeHandler}
                            errors={errors.Email}
                          />
                        </div>
                        <div className='form-group smalls'>
                          <label>Password</label>
                          <InputGroup
                            label='Password'
                            type='password'
                            name='Password'
                            onChangeHandler={onChangeHandler}
                            errors={errors.Password}
                          />
                        </div>
                        <div className='d-flex align-items-center justify-content-center'>
                          <ul className='alios_slide_nav'>
                            <li><a href='#' className='btn btn_slide'><i className='fas fa-arrow-left' /></a></li>
                            <li><a href='#' className='btn btn_slide'><i className='fas fa-arrow-right' /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className='tab-pane fade' id='v-pills-finish' role='tabpanel' aria-labelledby='v-pills-finish-tab'>
                        <div className='succ_wrap'>
                          <div className='succ_121'><i className='fas fa-thumbs-up' /></div>
                          <div className='succ_122'>
                            <h4>Admin Successfully Added</h4>
                          </div>
                          <button type='submit' className='btn theme-bg text-white'>submit</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </div>

  )
}
export default AddAdmin
