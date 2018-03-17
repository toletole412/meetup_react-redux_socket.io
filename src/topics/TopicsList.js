import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class TopicsList extends PureComponent {
  static propTypes = {
  topics: PropTypes.arrayOf(PropTypes.shape({
    topic: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired
  })).isRequired
}


  render() {
    return (
      <div>
        <h1>Topics Top 10</h1>
        <div>
        { this.props.topics.map((topic) =>
          <div key={topic}> {topic.topic} ({topic.count}) </div>)}
        </div>
      </div>
    )
  }
}


const mapStateToProps = ({topics}) => ({topics})
export default connect(mapStateToProps)(TopicsList)
