import { ADD_RSVP } from '../actions/types'

/*
need to fix after understand static data
export default (state = [], { type, payload } = {}) => {
    switch (type) {
      case ADD_RSVP:
        return
          if (state.length < 10) {
            state.concat(payload)
          } else {
            [payload, ...[state]].pop()
          }

      default:
        return state
    }
  }
*/
