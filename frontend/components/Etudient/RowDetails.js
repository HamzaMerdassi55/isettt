import React from 'react'
import { useDispatch } from 'react-redux'
import { DeleteProfile } from '../../redux/actions/profileActions'

function RowDetails ({ _id, user, bio }) {
  const dispatch = useDispatch()
  const DeleteHandler = (id) => {
    dispatch(DeleteProfile(id))
  }
  return (
    <tr>
      <th>{user.nom}</th>
      <td>{user.prénom}</td>
      <td>{user.cin}</td>
      <td>{user.email}</td>
      <td>{user.niveau}</td>
      <td>{user.departement}</td>
      <td>{user.Telephone}</td>
      <td>
        <div className='dropdown show'>
          <a className='btn btn-action' href='fake_url' data-toggle='dropdown'>
            <i className='fas fa-ellipsis-h' />
          </a>
          <div className='drp-select dropdown-menu'>
            <a className='dropdown-item' onClick={() => DeleteHandler(_id)}>Delete</a>
          </div>
        </div>
      </td>
    </tr>
  )
}

export default RowDetails
