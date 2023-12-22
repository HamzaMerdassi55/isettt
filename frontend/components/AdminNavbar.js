import React from 'react'

export default class AdminNavbar extends React.Component {
  render () {
    return (
      <div classNameName='header header-light'>
        <div className='container'>
          <nav id='navigation' className='navigation navigation-landscape'>
            <div className='nav-header'>
              <a className='nav-brand' href='/'>
                <img src='/dist/img/Brand.png' className='logo' alt='a' />
              </a>
              <div className='nav-toggle' />
              <div className='mobile_nav'>
                <ul>
                  <li>
                    <a href='/Login' data-toggle='modal' class='crs_yuo12 w-auto text-white theme-bg'>
                      <span className='embos_45'><i className='fas fa-sign-in-alt mr-1' />Sign In</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='nav-menus-wrapper'>
              <ul className='nav-menu'>

                <li className='active'><a href='/'>Home<span className='submenu-indicator' /></a>
                </li>

                <li><a href='/Explore'>Explore<span className='submenu-indicator' /></a>
                </li>

                <li><a href='/FindInstructor'>Find Instructor<span className='submenu-indicator' /></a>
                </li>

              </ul>
              <ul className='nav-menu nav-menu-social align-to-right'>
                <li className='account-drop'>
                  <a href='/Wishlist' className='crs_yuo12'>
                    <span className='embos_45'><i className='fas fa-shopping-basket' /><i className='embose_count'>4</i></span>
                  </a>
                </li>
                <li className='account-drop'>
                  <a href='javascript:void(0);' className='crs_yuo12' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
                    <span className='embos_45'><i className='fas fa-bell' /><i className='embose_count red'>3</i></span>
                  </a>
                  <div className='dropdown-menu pull-right animated flipInX'>
                    <div className='drp_menu_headr bg-warning'>
                      <h4>22 Notifications</h4>
                    </div>
                    <div className='ground-list ground-hover-list'>
                      <div className='ground ground-list-single'>
                        <div className='rounded-circle p-3 p-sm-4 d-flex align-items-center justify-content-center bg-light-success'>
                          <div className='position-absolute text-success h5 mb-0'><i className='fas fa-user' /></div>
                        </div>
                        <div className='ground-content'>
                          <h6><a href='#'>Maryam Amiri</a></h6>
                          <small className='text-fade'>New User Enrolled in Python</small>
                          <span className='small'>Just Now</span>
                        </div>
                      </div>
                      <div className='ground ground-list-single'>
                        <div className='rounded-circle p-3 p-sm-4 d-flex align-items-center justify-content-center bg-light-danger'>
                          <div className='position-absolute text-danger h5 mb-0'><i className='fas fa-comments' /></div>
                        </div>
                        <div className='ground-content'>
                          <h6><a href='#'>Shilpa Rana</a></h6>
                          <small className='text-fade'>Shilpa Send a Message</small>
                          <span className='small'>02 Min Ago</span>
                        </div>
                      </div>
                      <div className='ground ground-list-single'>
                        <div className='rounded-circle p-3 p-sm-4 d-flex align-items-center justify-content-center bg-light-info'>
                          <div className='position-absolute text-info h5 mb-0'><i className='fas fa-grin-squint-tears' /></div>
                        </div>
                        <div className='ground-content'>
                          <h6><a href='#'>Amar Muskali</a></h6>
                          <small className='text-fade'>Need Responsive Business Tem...</small>
                          <span className='small'>10 Min Ago</span>
                        </div>
                      </div>
                      <div className='ground ground-list-single'>
                        <div className='rounded-circle p-3 p-sm-4 d-flex align-items-center justify-content-center bg-light-purple'>
                          <div className='position-absolute text-purple h5 mb-0'><i className='fas fa-briefcase' /></div>
                        </div>
                        <div className='ground-content'>
                          <h6><a href='#'>Maryam Amiri</a></h6>
                          <small className='text-fade'>Next Meeting on Tuesday..</small>
                          <span className='small'>15 Min Ago</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className='btn-group account-drop'>
                    <a href='javascript:void(0);' className='crs_yuo12 btn btn-order-by-filt' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
                      <img src='/dist/img/hamza.jpg' className='avater-img' alt='' />
                    </a>
                    <div className='dropdown-menu pull-right animated flipInX'>
                      <div className='drp_menu_headr'>
                        <h4>Hi, Daniel</h4>
                      </div>
                      <ul>
                        <li><a href='/'><i className='fa fa-tachometer-alt' />Dashboard<span className='notti_coun style-1'>4</span></a></li>
                        <li><a href='fake-url'><i className='fa fa-user-tie' />My Profile</a></li>
                        <li><a href='/MailBox'><i className='fas fa-comments' />Messages</a></li>
                        <li><a href='fake-url'><i className='fa fa-unlock-alt' />Sign Out</a></li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    )
  }
}
