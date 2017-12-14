import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Title from '../components/Title'


class EvaluationItem extends PureComponent {
  static propTypes = {
    color: PropTypes.string.isRequired,
    evaluationDate: PropTypes.string.isRequired,
    remark: PropTypes.string
  }

  render() {
    const { _id, color, evaluationDate, remark } = this.props

    return(
      <article className="EvaluationItem">
        <header>
          <Link to={`/evaluations/${_id}`}>
            <Title content={color} className="level-2" />
          </Link>

        </header>

        <div>
          <p>Evaluation date: { new Date(evaluationDate).toLocaleDateString("nl-NL") }</p>
          <p>Remarks: {remark}</p>
        </div>

      </article>
    )
  }
}

const mapStateToProps = ({ evaluations }) => ({ evaluations })

export default connect(mapStateToProps)(EvaluationItem)
