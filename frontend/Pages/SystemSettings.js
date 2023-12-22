import React from 'react'

export default class SystemSettings extends React.Component {
  render () {
    return (
      <div className='col-lg-9 col-md-9 col-sm-12'>
        <div className='row'>
          <div className='col-xl-12 col-lg-12 col-md-12'>
            <div className='dashboard_wrap'>
              <div className='row'>
                <div className='col-xl-12 col-lg-12 col-md-12 mb-4'>
                  <h6 className='m-0'>System Settings</h6>
                </div>
              </div>
              <div className='row justify-content-center'>
                <div className='col-xl-12 col-lg-12 col-md-12'>
                  <form>
                    <div className='form-group smalls'>
                      <label>Author Name</label>
                      <input type='text' className='form-control' placeholder='Author Name' />
                    </div>
                    <div className='form-group smalls'>
                      <label>Website Email*</label>
                      <input type='text' className='form-control' placeholder='Example@gmail.com' />
                    </div>
                    <div className='form-group smalls'>
                      <label>Phone</label>
                      <input type='text' className='form-control' placeholder={8556068402} />
                    </div>
                    <div className='form-group smalls'>
                      <label>Address</label>
                      <textarea className='form-control' placeholder='Canada, USA' defaultValue='' />
                    </div>
                    <div className='form-group smalls'>
                      <label>Choose Language</label>
                      <div className='simple-input'>
                        <select id='lgu' className='form-control'>
                          <option value>&nbsp;</option>
                          <option value={2}>English</option>
                          <option value={4}>French</option>
                        </select>
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
