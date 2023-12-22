import React from 'react'

export default class WebsiteSettings extends React.Component {
  render () {
    return (
      <div className='col-lg-9 col-md-9 col-sm-12'>
        <div className='row'>
          <div className='col-xl-12 col-lg-12 col-md-12'>
            <div className='dashboard_wrap'>
              <div className='row'>
                <div className='col-xl-12 col-lg-12 col-md-12 mb-4'>
                  <h6 className='m-0'>Website Settings</h6>
                </div>
              </div>
              <div className='row justify-content-center'>
                <div className='col-xl-12 col-lg-12 col-md-12'>
                  <form>
                    <div className='form-group smalls'>
                      <label>Banner Name*</label>
                      <input type='text' className='form-control' placeholder='Find the most exciting online courses' />
                    </div>
                    <div className='form-group smalls'>
                      <label>Banner Sub Title*</label>
                      <input type='text' className='form-control' placeholder='Learners around the world are launching new careers, advancing in their fields, and enriching their lives.' />
                    </div>
                    <div className='form-group smalls'>
                      <label>Cookie Status*</label>
                      <div className='d-flex'>
                        <div className='drios'>
                          <input id={450} className='checkbox-custom' name='cookie' type='radio' defaultChecked />
                          <label htmlFor={450} className='checkbox-custom-label'>Enable</label>
                        </div>
                        <div className='drios ml-3'>
                          <input id={451} className='checkbox-custom' name='cookie' type='radio' />
                          <label htmlFor={451} className='checkbox-custom-label'>Disable</label>
                        </div>
                      </div>
                    </div>
                    <div className='form-group smalls'>
                      <label>Cookie Policy</label>
                      <textarea className='form-control summernote' defaultValue='' />
                    </div>
                    <div className='form-group smalls'>
                      <label>About Us</label>
                      <textarea className='form-control summernote' defaultValue='' />
                    </div>
                    <div className='form-group smalls'>
                      <label>Terms &amp; Conditions</label>
                      <textarea className='form-control summernote' defaultValue='' />
                    </div>
                    <div className='form-group smalls'>
                      <label>Privacy Policy</label>
                      <textarea className='form-control summernote' defaultValue='' />
                    </div>
                    <div className='form-group smalls'>
                      <button className='btn theme-bg text-white' type='button'>Save Change</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className='dashboard_wrap'>
              <div className='row'>
                <div className='col-xl-12 col-lg-12 col-md-12 mb-4'>
                  <h6 className='m-0'>Logo &amp; Banners</h6>
                </div>
              </div>
              <div className='row justify-content-center'>
                <div className='col-xl-12 col-lg-12 col-md-12'>
                  <form>
                    <div className='form-group smalls'>
                      <label>Banner Image*</label>
                      <div className='custom-file'>
                        <input type='file' className='custom-file-input' id='bimage' />
                        <label className='custom-file-label' htmlFor='bimage'>Choose file</label>
                      </div>
                    </div>
                    <div className='form-group smalls'>
                      <label>Logo*</label>
                      <div className='custom-file'>
                        <input type='file' className='custom-file-input' id='logo' />
                        <label className='custom-file-label' htmlFor='logo'>Choose file</label>
                      </div>
                    </div>
                    <div className='form-group smalls'>
                      <button className='btn theme-bg text-white' type='button'>Save Change</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
