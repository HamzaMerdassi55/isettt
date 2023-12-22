import React, { Component } from 'react'
import axios from 'axios'
import Read from './readtable.evement'
export default class ManageEvenment extends Component {

  state = {
    Departement: '',
  }
  
  constructor(){
    super();
  }
  
  filterEvenment(){
    const body = {};
    body.Departement = document.getElementById('Departement').value;

    
     const sendDataApi =() =>{}
    axios.post('http://localhost:3000/Evenment', body)
      .then(() => {
        //success
        document.getElementById('filt')?.click();
      })
      .catch(e => {
        alert(e.message);
      })

  }
  ResltCourse(){
    const Result = {};
    Result.Show = document.getElementById('Show').value;
    Result.Search = document.getElementById('Search').value;
    
   
    axios.put('http://localhost:3001/ManageCourses', Result)
      .then(() => {
        //success
        document.getElementById('tab ');
      })
      .catch(e => {
        alert(e.message);
      })
  }
    
  

  render () {
    return (
      <div className='col-lg-9 col-md-9 col-sm-12'>
        {/* Row */}
        <div className='row justify-content-between'>
          <div className='col-lg-12 col-md-12 col-sm-12 pb-4'>
            <div className='dashboard_wrap d-flex align-items-center justify-content-between'>
              <div className='arion'>
                <nav className='transparent'>
                  <ol className='breadcrumb'>
                    <li className='breadcrumb-item'><a href='#'>Home</a></li>
                    <li className='breadcrumb-item active' aria-current='page'>Manage Courses</li>
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
                  <h6 className='m-0'>All Courses List</h6>
                </div>
              </div>
              <div className='row align-items-end mb-5'>
                <div className='col-xl-3 col-lg-6 col-md-6 col-sm-6'>
                  <div className='form-group'>
                    <label>Departemnet</label>
                    <div className='smalls'>
                      <select id='departement' className='form-control'>
                        <option value>&nbsp;</option>
                        <option value={1}>IT &amp; Software</option>
                        <option value={2}>Banking</option>
                        <option value={3}>Medical</option>
                        <option value={4}>Insurence</option>
                        <option value={5}>Finance &amp; Accounting</option>
                      </select>
                    </div>
                  </div>
                </div>
          
                <div className='col-xl-2 col-lg-4 col-md-6 col-sm-6'>
                  <div className='form-group'>
                    <button type='button' id='filt' onClick={'body'} className='btn text-white full-width theme-bg'>Filter</button>
                  </div>
                </div>
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
              < Read />
            </div>
          </div>
        </div>
      </div>

    )
  }
}
