import React, { Component } from 'react'
import axios from 'axios'

export default class AddEvenment extends Component {
  
  state = {
    Title: '',
    Description: '',
    Departement: '',
    Niveau: 0,
    Group: '',
    Add_Video: '',
    Add_Image: '',
  }

  constructor(){
    super();
  }
  
  sendCourse(){
    const body = {};
    body.Title = document.getElementById('Title').value;
    body.Description = document.getElementById('Description').value;
    body.Departement = document.getElementById('Departement').value;
    body.Niveau = document.getElementById('Niveau').value;
    body.Groupe = document.getElementById('Group').value;
   


    axios.post('http://localhost:3000/Evenment', body)
      .then(() => {
        //success
        document.getElementById('v-pills-finish-tab')?.removeAttribute('disabled');
        document.getElementById('v-pills-finish-tab')?.click();
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
                    <li className='breadcrumb-item active' aria-current='page'>Ajouter nouveau Evenment</li>
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
                <form>
                  <div className='row justify-content-between'>
                    <div className='col-xl-3 col-lg-4 col-md-5 col-sm-12'>
                      <div className='nav flex-column nav-pills me-3' id='v-pills-tab' role='tablist' aria-orientation='vertical'>
                        <button className='nav-link active' id='v-pills-basic-tab' data-toggle='pill' data-target='#v-pills-basic' type='button' role='tab' aria-controls='v-pills-basic' aria-selected='true'  onClick={this.CreateBasic}>Basic</button>
                        <button className='nav-link' id='v-pills-requirements-tab' data-toggle='pill' data-target='#v-pills-requirements' type='button' role='tab' aria-controls='v-pills-requirements' aria-selected='false' onClick={this.Group}>Group</button>
                        <button className='nav-link' id='v-pills-media-tab' data-toggle='pill' data-target='#v-pills-media' type='button' role='tab' aria-controls='v-pills-media' aria-selected='false'onClick={this.Media}>Media</button>
                        <button disabled className='nav-link' id='v-pills-finish-tab' data-toggle='pill' data-target='#v-pills-finish' type='button' role='tab' aria-controls='v-pills-finish' aria-selected='false'>Finish</button>
                      </div>
                    </div>
                    <div className='col-xl-9 col-lg-8 col-md-7 col-sm-12'>
                      <div className='tab-content' id='v-pills-tabContent'>
                        {/* Basic */}
                        <div className='tab-pane fade show active' id='v-pills-basic' role='tabpanel' aria-labelledby='v-pills-basic-tab'>
                          <div className='form-group smalls'>
                            <label>Course Title*</label>
                            <input type='text' id="Title" className='form-control' placeholder='Enter Course Title' />
                          </div>
                          <div className='form-group smalls'>
                            <label>Description</label>
                            <br/>
                            <textarea id="Description" className='summernote' defaultValue='' cols="100" rows="3" />
                          </div>
                          <div className='form-group smalls'>
                            <label>Departement</label>
                            <div className='simple-input'>
                              <select id='Departement' className='form-control'>
                                <option value>&nbsp;</option>
                                <option value={1}>IT & Software</option>
                                <option value={2}>Banking</option>
                                <option value={3}>Medical</option>
                                <option value={4}>Insurence</option>
                                <option value={5}>Finance &amp; Accounting</option>
                              </select>
                            </div>
                          </div>
                          <div className='form-group smalls'>
                            <label>Niveau</label>
                            <div className='simple-input'>
                              <select id='Niveau' className='form-control'>
                                <option value>&nbsp;</option>
                                <option value={1}>Beginner</option>
                                <option value={2}>Basic</option>
                                <option value={3}>Mediam</option>
                                <option value={4}>Advance</option>
                              </select>
                            </div>
                          </div>
                          {/*<div className='form-group smalls'>
                            <label>Language</label>
                            <div className='simple-input'>
                              <select id='lgu' className='form-control'>
                                <option value>&nbsp;</option>
                                <option value={2}>French</option>
                                <option value={3}>English</option>
                                <option value={4}>Other</option>
                              </select>
                            </div>
                          </div>*/}
                          <div className='d-flex align-items-center justify-content-center'>
                            <ul className='alios_slide_nav'>
                              <li><a href='#' className='btn btn_slide disabled'><i className='fas fa-arrow-left' /></a></li>
                              <li><a href='#' className='btn btn_slide'><i className='fas fa-arrow-right' /></a></li>
                            </ul>
                          </div>
                        </div>
                        {/* Group */}
                        <div className='tab-pane fade' id='v-pills-requirements' role='tabpanel' aria-labelledby='v-pills-requirements-tab'>
                          <div className='form-group smalls'>
                            <label>Group</label>
                            <div className='row m-0'>
                              <input type='text' id='Group' className='col-9 col-sm-9 form-control' placeholder='Provide Group' />
                              <div className='col-3 col-sm-3'>
                                <button className='btn theme-bg' type='button'><i className='fas fa-plus' /></button>
                              </div>
                            </div>
                          </div>
                          <div className='form-group smalls'>
                            <ul className='lists-4'>
                              <li>At vero eos et accusamus et iusto odio dignissimos ducimus</li>
                              <li>At vero eos et accusamus et iusto odio dignissimos ducimus</li>
                              <li>At vero eos et accusamus et iusto odio dignissimos ducimus</li>
                              <li>At vero eos et accusamus et iusto odio dignissimos ducimus</li>
                              <li>At vero eos et accusamus et iusto odio dignissimos ducimus</li>
                            </ul>
                          </div>
                          <div className='d-flex align-items-center justify-content-center'>
                            <ul className='alios_slide_nav'>
                              <li><a href='#' className='btn btn_slide'><i className='fas fa-arrow-left' /></a></li>
                              <li><a href='#' className='btn btn_slide'><i className='fas fa-arrow-right' /></a></li>
                            </ul>
                          </div>
                        </div>
                        {/* pricing */}
                        <div className='tab-pane fade' id='v-pills-pricing' role='tabpanel' aria-labelledby='v-pills-pricing-tab'>
                          <div className='form-group smalls'>
                           
                          </div>
                          <div className='form-group smalls'>
                            <label>Course Price($)</label>
                            <input type='text' id='Course_Price' className='form-control' placeholder='Enter Course Price' />
                          </div>
                          <div className='form-group smalls'>
                            <label>Discount Price($)</label>
                            <input type='text' className='form-control' id='Course_Discount' placeholder='Enter Discount Price' />
          
                          </div>
                          <div className='d-flex align-items-center justify-content-center'>
                            <ul className='alios_slide_nav'>
                              <li><a href='#' className='btn btn_slide'><i className='fas fa-arrow-left' /></a></li>
                              <li><a href='#' className='btn btn_slide'><i className='fas fa-arrow-right' /></a></li>
                            </ul>
                          </div>
                        </div>
                        {/* media */}
                        <div className='tab-pane fade' id='v-pills-media' role='tabpanel' aria-labelledby='v-pills-media-tab'>
                        <div className='form-group smalls'>
                            <label>ADD Image Course </label>
                            <div className='custom-file'>
                              <input type='file' className='custom-file-input' id='customFile' />
                              <label className='custom-file-label' htmlFor='customFile'>Choose Images Course</label>
                            </div>
                          </div>
                          <div className='form-group smalls'>
                            <label>ADD Vedio Course </label>
                            <div className='custom-file'>
                              
                              
                              <label className='custom-file-label' htmlFor='customFile'>Choose Vedio Course</label>
                            </div>
                          </div>
                          <div className='d-flex align-items-center justify-content-center'>
                            <ul className='alios_slide_nav'>
                              <li><a href='#' className='btn btn_slide'><i className='fas fa-arrow-left' /></a></li>
                              <li><a href='#' onClick={this.sendCourse.bind(this)} className='btn btn_slide'><i className='fas fa-arrow-right' /></a></li>
                            </ul>
                          </div>
                        </div>
                        {/* finish */}
                        <div className='tab-pane fade' id='v-pills-finish' role='tabpanel' aria-labelledby='v-pills-finish-tab'>
                          <div className='succ_wrap'>
                            <div className='succ_121'><i className='fas fa-thumbs-up' /></div>
                            <div className='succ_122'>
                              <h4>Course Successfully Added</h4>
                            </div>
                            <div className='succ_123'><a href='/ManageCourses' className='btn theme-bg text-white'>View Course</a></div>
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
}
