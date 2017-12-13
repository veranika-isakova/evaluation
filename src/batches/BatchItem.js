import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Title from '../components/Title'


class BatchItem extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    startDate: PropTypes.instanceOf(Date),
    endDate: PropTypes.instanceOf(Date)
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
          <p>{ startDate }</p>
          <p>{ endDate }</p>
        </div>

      </article>
    )
  }
}

const mapStateToProps = ({ batches }) => ({ batches })

export default connect(mapStateToProps)(BatchItem)
