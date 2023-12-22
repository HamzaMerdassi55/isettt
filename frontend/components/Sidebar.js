import React from 'react'

export default class Sidebar extends React.Component {
  render () {
    return (
      <div className='col-lg-3 col-md-3'>
        <div class='dashboard-navbar'>
          <div className='d-user-avater'>
            <img
              src='/dist/img/hamza.jpg'
              className='img-fluid avater'
              alt
            />
            <h4>Hamza Merdassi</h4>
            <span>Administrator</span>
          </div>
          <div className='d-navigation'>
            <ul id='side-menu'>
              <li className='active'>
                <a href='/'>
                  <i className='fas fa-th' />
                  Dashboard
                </a>
              </li>
              <li className='dropdown'>
                <a href='void(0);'>
                  <i className='fas fa-gem' />
                  Departement
                  <span className='ti-angle-left' />
                </a>
                <ul className='nav nav-second-level'>
                  <li>
                    <a href='/manageDepartement'>Manage Departement</a>
                  </li>
                </ul>
              </li>
              <li className='dropdown'>
                <a href='void(0);'>
                  <i className='fas fa-archive' />
                  Evenment
                  <span className='ti-angle-left' />
                </a>
                <ul className='nav nav-second-level'>
                  <li>
                    <a href='/AddEvevenment'>Add New Evenment</a>
                  </li>
                </ul>
              </li>
              <li className='dropdown'>
                <a href='void(0);'>
                  <i className='fas fa-user-shield' />
                  Admins
                  <span className='ti-angle-left' />
                </a>
                <ul className='nav nav-second-level'>
                  <li>
                    <a href='/manageadmins'>Manage Admins</a>
                  </li>
                </ul>
              </li>
              <li className='dropdown'>
                <a href='void(0);'>
                  <i className='fas fa-toolbox' />
                  Instructors
                  <span className='ti-angle-left' />
                </a>
                <ul className='nav nav-second-level'>
                  <li>
                    <a href='/ManageInstructors'>Manage Instructors</a>
                  </li>
                </ul>
              </li>
              <li className='dropdown'>
                <a href='void(0);'>
                  <i className='fas fa-user' />
                  Students
                  <span className='ti-angle-left' />
                </a>
                <ul className='nav nav-second-level'>
                  <li>
                    <a href='/ManageStudents'>Manage Students</a>
                  </li>
                </ul>
              </li>
              <li className='dropdown'>
                <a href='void(0);'>
                  <i className='fas fa-book' />
                  Courses
                  <span className='ti-angle-left' />
                </a>
                <ul className='nav nav-second-level'>
                  <li><a href='/ManageDepartement'>Manage Departement</a></li>
                </ul>
              </li>
              <li>
              </li>
              <li>
                <a href='/ManageProfile'>
                  <i className='fas fa-address-card' />
                  My Profile
                </a>
              </li>
              <li className='dropdown'>
                <a href='void(0);'>
                  <i className='fas fa-cog' />
                  Settings
                  <span className='ti-angle-left' />
                </a>
                <ul className='nav nav-second-level'>
                  <li>
                    <a href='/WebsiteSettings'>Website Settings</a>
                  </li>
                  <li>
                    <a href='/SystemSettings'>System Settings</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
