import React from 'react'
import { Link } from 'react-router-dom'

function RowDetails (props) {
  return (
    <tr>
      <th>{props.Id}</th>
      <td>{props.Title}</td>
      <td>
        <div className='dropdown show'>
          <a className='btn btn-action' href='fake_url' data-toggle='dropdown'>
            <i className='fas fa-ellipsis-h' />
          </a>
          <div className='drp-select dropdown-menu'>
            <Link to={`/${props.Id}`} className='dropdown-item'>Edit</Link>
            <a className='dropdown-item' onClick={() => props.OnDelete(props.Id)}>Delete</a>
          </div>
        </div>
      </td>
    </tr>
  )
}

export default RowDetails
