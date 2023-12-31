import { SET_PROFILE, SET_PROFILES, DELETE_PROFILE } from '../types'

const intitialState = {
  profiles: [],
  profile: {}
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = intitialState, action) {
  switch (action.type) {
    case SET_PROFILE:
      return {
        ...state,
        profile: action.payload
      }
    case SET_PROFILES:
      return {
        ...state,
        profiles: action.payload
      }
    case DELETE_PROFILE:
      return {
        ...state,
        profiles: state.profiles.filter(p => p._id !== action.payload)
      }

    default:
      return state
  }
}
