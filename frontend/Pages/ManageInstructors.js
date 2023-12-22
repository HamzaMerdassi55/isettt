import React from 'react'

export default class ManageInstructors extends React.Component {
  render () {
    return (
      <div className='col-lg-9 col-md-9 col-sm-12'>
        <div className='row justify-content-between'>
          <div className='col-lg-12 col-md-12 col-sm-12 pb-4'>
            <div className='dashboard_wrap d-flex align-items-center justify-content-between'>
              <div className='arion'>
                <nav className='transparent'>
                  <ol className='breadcrumb'>
                    <li className='breadcrumb-item'><a href='#'>Home</a></li>
                    <li className='breadcrumb-item active' aria-current='page'>Manage Instructor</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-xl-12 col-lg-12 col-md-12'>
            <div className='dashboard_wrap'>
              <div className='row'>
                <div className='col-xl-12 col-lg-12 col-md-12 mb-4'>
                  <h6 className='m-0'>All Instructor List</h6>
                </div>
              </div>
              <div className='row'>
                <div className='col-xl-12 col-lg-12 col-md-12 mb-2'>
                  <div className='table-responsive'>
                    <table className='table dash_list'>
                      <thead>
                        <tr>
                          <th scope='col'>Id</th>
                          <th scope='col'>Photo</th>
                          <th scope='col'>Name</th>
                          <th scope='col'>Email</th>
                          <th scope='col'>Active Course</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope='row'>1</th>
                          <td><img src='https://via.placeholder.com/500x500' className='img-fluid circle' width={40} alt /></td>
                          <td><div className='smalls lg'>Myrtle M. Korn</div></td>
                          <td><span className='smalls lg'>Beltran@teleworm.us</span></td>
                          <td><span className='smalls lg'>0 Courses</span></td>
                          <td>
                            <div className='dropdown show'>
                              <a className='btn btn-action' href='#' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
                                <i className='fas fa-ellipsis-h' />
                              </a>
                              <div className='drp-select dropdown-menu'>
                                <a className='dropdown-item' href='JavaScript:Void(0);'>Edit</a>
                                <a className='dropdown-item' href='JavaScript:Void(0);'>Delete</a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th scope='row'>2</th>
                          <td><img src='https://via.placeholder.com/500x500' className='img-fluid circle' width={40} alt /></td>
                          <td><div className='smalls lg'>Laurie T. Eller</div></td>
                          <td><span className='smalls lg'>Paxson@armyspy.com</span></td>
                          <td><span className='smalls lg'>0 Courses</span></td>
                          <td>
                            <div className='dropdown show'>
                              <a className='btn btn-action' href='#' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
                                <i className='fas fa-ellipsis-h' />
                              </a>
                              <div className='drp-select dropdown-menu'>
                                <a className='dropdown-item' href='JavaScript:Void(0);'>Edit</a>
                                <a className='dropdown-item' href='JavaScript:Void(0);'>Delete</a>
                              </div>
                            </div>
                          </td>
                        </tr>
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
}
