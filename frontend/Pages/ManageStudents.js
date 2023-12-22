import React from 'react'

function ManageStudents () {
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
                  <li className='breadcrumb-item active' aria-current='page'>Manage Students</li>
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
                <h6 className='m-0'>All Students List</h6>
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
                        <th scope='col'>LastName</th>
                        <th scope='col'>Email</th>
                        <th scope='col'>Phone</th>
                        <th scope='col'>Role</th>
                        <th scope='col'>bio</th>
                        <th scope='col'>Action</th>
                      </tr>
                    </thead>
                    <tbody />
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ManageStudents
