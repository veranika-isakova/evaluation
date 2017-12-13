import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetch as fetchBatches } from '../actions/batches'
import Title from '../components/Title'

export class BatchPage extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
  }

  componentWillMount() {
    this.props.fetchBatches()
  }

  render() {
    const { title } = this.props

    if (!title) return null

    return(
      <div className="batch page">
        <Title content={ title } />
      </div>
    )
  }
}

const mapStateToProps = ({ batches }, { match }) => {
  const batch = batches.reduce((prev, next) => {
    if (next._id === match.params.batchId) {
      return next
    }
    return prev
  }, {})

  return {
    ...batch
  }
}
//match?
export default connect(mapStateToProps, { fetchBatches})(BatchPage) // RecipePage receives props from connect
