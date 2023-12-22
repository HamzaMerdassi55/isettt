import React from 'react'
import classnames from 'classnames'

function InputGroup (props) {
  return (
    <div className='form-group smalls'>
      <label className='form-label'>
        {props.label}
      </label>
      <input type={props.type} value={props.value} className={(classnames('form-control', { 'is-invalid': props.errors }))} name={props.name} onChange={props.onChangeHandler} />
      {
      props.errors && (<div class='invalid-feedback'>
        {props.errors} </div>
      )
    }
    </div>
  )
}
export default InputGroup
