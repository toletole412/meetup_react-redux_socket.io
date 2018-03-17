import React, {PureComponent} from 'react'
import RsvpItem from './RsvpItem'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'


class RsvpList extends PureComponent {
  static propTypes = {
    rsvps: PropTypes.arrayOf(PropTypes.string).isRequired,
    rsvp_id: PropTypes.number.isRequired
  }

   //after fixing reducer
  render() {
    return (
      <div>

      </div>
    )
  }
}

const mapStateToProps = ({ rsvps }) => ( { rsvps })
export default connect(mapStateToProps)(RsvpList)
