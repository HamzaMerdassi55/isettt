import axios from 'axios'
import { ERRORS, SET_USER } from '../types'
import jwt_decode from 'jwt-decode'
import { setAuth } from '../../util/setAuth'

export const Registration = (form, history) => dispatch => {
  axios.post('/api/register', form)
    .then(res => {
      history.push('/Login')
      dispatch({
        type: ERRORS,
        payload: {}
      }) //chouf f site client
    })
    .catch(err => {
      dispatch({
        type: ERRORS,
        payload: err.response.data
      })
    })
}

export const LoginAction = (form, history) => dispatch => {
  axios.post('/api/login', form)
    .then(res => {
      const { token } = res.data
      window.localStorage.setItem('jwt', token)
      const decode = jwt_decode(token)
      dispatch(setUser(decode))
      setAuth(token)
    })
    .catch(err => {
      dispatch({
        type: ERRORS,
        payload: err.response.data
      })
    })
}

export const Logout = () => dispatch => {
  window.localStorage.removeItem('jwt')
  dispatch({
    type: SET_USER,
    payload: {}
  })
}

export const setUser = (decode) => ({
  type: SET_USER,
  payload: decode
})
