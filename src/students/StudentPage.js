import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetch as fetchStudents } from '../actions/students'
import Title from '../components/Title'
import EvaluationItem from '../evaluations/EvaluationItem'
import Avatar from 'material-ui/Avatar';

const style = {border: 0, objectFit: 'cover', margin: 5};

export class StudentPage extends PureComponent {
  static propTypes = {
    name: PropTypes.string,
    photo: PropTypes.string
  }

  componentWillMount() {
    this.props.fetchStudents()
  }
  renderEvaluation(evaluation, index) {
    return (
      <EvaluationItem key={index} {...evaluation} />
    )
  }
  render() {
    const { name, photo, evaluations } = this.props

    if (!name) return null
    if (!photo) return null

    return(
      <div className="student page">
        <Title content={ name } />
        <Avatar
        src={photo}
        style={style}
        size={100}/>
        <main>
          {evaluations.map(this.renderEvaluation)}
        </main>
      </div>
    )
  }
}

const mapStateToProps = ({ students }, { match }) => {
  const student = students.reduce((prev, next) => {
    if (next._id === match.params.studentId) {
      return next
    }
    return prev
  }, {})

  return {
    ...student
  }
}
//match?
export default connect(mapStateToProps, { fetchStudents})(StudentPage)
