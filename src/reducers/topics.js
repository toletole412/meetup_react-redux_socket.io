import { UPDATE_TOPICS } from '../actions/types'


export default (state = [], { type, payload } = {}) => {
    switch (type) {
      case UPDATE_TOPICS:
        return payload
      default:
        return state
    }
  }
