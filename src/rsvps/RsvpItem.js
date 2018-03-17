import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'



class RsvpItem extends PureComponent {
  static propTypes = {
    rsvp: PropTypes.object.isRequired,
    rsvp_id: PropTypes.number.isRequired
  }

  render() {
    return (
      <div>
        <p></p>
      </div>
    )
  }
}

export default RsvpItem
