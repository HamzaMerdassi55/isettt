import React from 'react'

export default class Dashboard extends React.Component {
  render () {
    return (

      <div className='col-lg-9 col-md-9 col-sm-12'>
        <div className='row justify-content-between'>
          <div className='col-lg-12 col-md-12 col-sm-12 pb-4'>
            <nav aria-label='breadcrumb'>
              <ol className='breadcrumb'>
                <li className='breadcrumb-item'><a href='#'>Home</a></li>
                <li className='breadcrumb-item active' aria-current='page'>Dashboard</li>
              </ol>
            </nav>
          </div>
        </div>
        <div className='row'>
          <div className='col-xl-3 col-lg-6 col-md-6 col-sm-12'>
            <div className='dashboard_stats_wrap'>
              <div className='rounded-circle p-4 p-sm-4 d-inline-flex align-items-center justify-content-center theme-bg mb-2'><div className='position-absolute text-white h5 mb-0'><i className='fas fa-book' /></div></div>
              <div className='dashboard_stats_wrap_content'><h4>607</h4> <span>Number of Courses</span></div>
            </div>
          </div>
          <div className='col-xl-3 col-lg-6 col-md-6 col-sm-12'>
            <div className='dashboard_stats_wrap'>
              <div className='rounded-circle p-4 p-sm-4 d-inline-flex align-items-center justify-content-center bg-primary mb-2'><div className='position-absolute text-white h5 mb-0'><i className='fas fa-video' /></div></div>
              <div className='dashboard_stats_wrap_content'><h4>5.2k</h4> <span>Number of Instructors</span></div>
            </div>
          </div>
          <div className='col-xl-3 col-lg-6 col-md-6 col-sm-12'>
            <div className='dashboard_stats_wrap'>
              <div className='rounded-circle p-4 p-sm-4 d-inline-flex align-items-center justify-content-center bg-warning mb-2'><div className='position-absolute text-white h5 mb-0'><i className='fas fa-users' /></div></div>
              <div className='dashboard_stats_wrap_content'><h4>78k</h4> <span>Number of Students</span></div>
            </div>
          </div>
          <div className='col-xl-3 col-lg-6 col-md-6 col-sm-12'>
            <div className='dashboard_stats_wrap'>
              <div className='rounded-circle p-4 p-sm-4 d-inline-flex align-items-center justify-content-center bg-purple mb-2'><div className='position-absolute text-white h5 mb-0'><i className='fas fa-gem' /></div></div>
              <div className='dashboard_stats_wrap_content'><h4>32 TND</h4> <span>Gains</span></div>
            </div>
          </div>
        </div>
        {/* /Row */}
        {/* Row */}
        <div className='row'>
          <div className='col-lg-10 col-md-12 col-sm-12'>
            <div className='row'>
              <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12'>
                <h5>Featured Cources</h5>
              </div>
              <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12'>
                <div className='grousp_crs'>
                  <div className='grousp_crs_left'>
                    <div className='grousp_crs_thumb'><img src='https://via.placeholder.com/300x300' className='img-fluid' alt /></div>
                    <div className='grousp_crs_caption'><h4>Adobe Photoshop cc 2021 - Free Assential Training</h4></div>
                  </div>
                  <div className='grousp_crs_right'>
                    <div className='frt_125'><i className='fas fa-fire text-warning mr-1' />8.7</div>
                    <div className='frt_but'><a href='#' className='btn text-white theme-bg'>View Course</a></div>
                  </div>
                </div>
                <div className='grousp_crs'>
                  <div className='grousp_crs_left'>
                    <div className='grousp_crs_thumb'><img src='https://via.placeholder.com/300x300' className='img-fluid' alt /></div>
                    <div className='grousp_crs_caption'><h4>Adobe Photoshop cc 2021 - Free Assential Training</h4></div>
                  </div>
                  <div className='grousp_crs_right'>
                    <div className='frt_125'><i className='fas fa-fire text-warning mr-1' />8.7</div>
                    <div className='frt_but'><a href='#' className='btn text-white theme-bg'>View Course</a></div>
                  </div>
                </div>
                <div className='grousp_crs'>
                  <div className='grousp_crs_left'>
                    <div className='grousp_crs_thumb'><img src='https://via.placeholder.com/300x300' className='img-fluid' alt /></div>
                    <div className='grousp_crs_caption'><h4>Adobe Photoshop cc 2021 - Free Assential Training</h4></div>
                  </div>
                  <div className='grousp_crs_right'>
                    <div className='frt_125'><i className='fas fa-fire text-warning mr-1' />8.7</div>
                    <div className='frt_but'><a href='#' className='btn text-white theme-bg'>View Course</a></div>
                  </div>
                </div>
                <div className='grousp_crs'>
                  <div className='grousp_crs_left'>
                    <div className='grousp_crs_thumb'><img src='https://via.placeholder.com/300x300' className='img-fluid' alt /></div>
                    <div className='grousp_crs_caption'><h4>Adobe Photoshop cc 2021 - Free Assential Training</h4></div>
                  </div>
                  <div className='grousp_crs_right'>
                    <div className='frt_125'><i className='fas fa-fire text-warning mr-1' />8.7</div>
                    <div className='frt_but'><a href='#' className='btn text-white theme-bg'>View Course</a></div>
                  </div>
                </div>
                <div className='grousp_crs'>
                  <div className='grousp_crs_left'>
                    <div className='grousp_crs_thumb'><img src='https://via.placeholder.com/300x300' className='img-fluid' alt /></div>
                    <div className='grousp_crs_caption'><h4>Adobe Photoshop cc 2021 - Free Assential Training</h4></div>
                  </div>
                  <div className='grousp_crs_right'>
                    <div className='frt_125'><i className='fas fa-fire text-warning mr-1' />8.7</div>
                    <div className='frt_but'><a href='#' className='btn text-white theme-bg'>View Course</a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
