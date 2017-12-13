import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Title from '../components/Title'
import './BatchItem.css'


class BatchItem extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired
  }

  render() {
    const { _id, title, startDate, endDate } = this.props

    return(
      <article className="BatchItem">
        <header>
          <Link to={`/batches/${_id}`}>
            <Title content={title} className="level-2" />
          </Link>

        </header>

        <div>
          <p>Start date: { new Date(startDate).toLocaleDateString("nl-NL") }</p>
          <p>End date: { new Date(endDate).toLocaleDateString("nl-NL") }</p>
        </div>

      </article>
    )
  }
}

const mapStateToProps = ({ batches }) => ({ batches })

export default connect(mapStateToProps)(BatchItem)
