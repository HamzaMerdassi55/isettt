import React, { useEffect, useState } from 'react'
import InputGroup from '../components/Departement/InputGroup'
import RowDetails from '../components/Admin/RowDetails'
import axios from 'axios'
import Alert from '../components/Alert'

function ManageDepartement () {
  const [departement, setDepartement] = useState([])
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
    axios.post('http://localhost:3000/departement', input)
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
    if (window.confirm('are you sure to delete this departement')) {
      axios.delete(`http://localhost:3000/departement/${id__}`)
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
    await axios.get('http://localhost:3000/departement')
      .then(res => {
        setDepartement(res.data)
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
                  <li className='breadcrumb-item'><a href='fake_url'>Home</a></li>
                  <li className='breadcrumb-item active' aria-current='page'>Manage Departement</li>
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
            <div className='row'>
              <div className='col-xl-12 col-lg-12 col-md-12 mb-4'>
                <h6 className='m-0'>Tous les departement</h6>
              </div>
            </div>
            <div className='row align-items-end mb-5'>
              <form className='col-xl-3 col-lg-6 col-md-6 col-sm-6' onSubmit={onSubmitHandler}>
                <InputGroup
                  label='Departement Title'
                  type='text'
                  name='Title'
                  onChangeHandler={onChangeHandler}
                  errors={errors.Title}
                />
                <button type='submit' className='btn text-white full-width theme-bg'>submit</button>
              </form>
            </div>
            <div className='row justify-content-between'>
              <div className='col-xl-2 col-lg-3 col-md-6'>
                <div className='form-group smalls row align-items-center'>
                  <label className='col-xl-3 col-lg-3 col-sm-2 col-form-label'>Show</label>
                  <div className='col-xl-9 col-lg-9 col-sm-10'>
                    <select id='show' className='form-control'>
                      <option value>&nbsp;</option>
                      <option value={1}>10</option>
                      <option value={2}>25</option>
                      <option value={3}>35</option>
                      <option value={3}>50</option>
                      <option value={3}>100</option>
                      <option value={3}>250</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className='col-xl-4 col-lg-5 col-md-6'>
                <div className='form-group smalls row align-items-center'>
                  <label className='col-xl-2 col-lg-2 col-sm-2 col-form-label'>Search</label>
                  <div className='col-xl-10 col-lg-10 col-sm-10'>
                    <input type='text' className='form-control' />
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-xl-12 col-lg-12 col-md-12 mb-2'>
                <div className='table-responsive'>
                  <table className='table dash_list'>
                    <thead>
                      <tr>
                        <th scope='col'>Id</th>
                        <th scope='col'>Title</th>
                        <th scope='col'>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        departement.map(({ Title, _id }) => (
                          <RowDetails Title={Title} Id={_id} OnDelete={OnDelete} />
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
                    <li className='page-item'><a className='page-link' href='fake_url'>1</a></li>
                    <li className='page-item active'>
                      <a className='page-link' href='fake_url'>2 <span className='sr-only'>(current)</span></a>
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

export default ManageDepartement