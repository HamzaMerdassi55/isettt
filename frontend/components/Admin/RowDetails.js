import React from 'react'

function RowDetails (props) {
  return (
    <tr>
      <th>{props.Id}</th>
      
      <td>{props.FirstName}</td>
      <td>{props.LastName}</td>
      <td>{props.Email}</td>
      <td>
        <div className='dropdown show'>
          <a className='btn btn-action' href='fake_url' data-toggle='dropdown'>
            <i className='fas fa-ellipsis-h' />
          </a>
          <div className='drp-select dropdown-menu'>
            <a className='dropdown-item' onClick={() => props.OnDelete(props.Id)}>Delete</a>
          </div>
        </div>
      </td>
    </tr>
  )
}

export default RowDetails
