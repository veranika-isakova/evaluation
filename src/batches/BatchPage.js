import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetch as fetchBatches } from '../actions/batches'
import Title from '../components/Title'
import StudentItem from '../students/StudentItem'
import StudentEditor from '../students/StudentEditor'
import './BatchPage.css'

export class BatchPage extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
  }

  componentWillMount() {
    this.props.fetchBatches()
  }
  selectStudent() {

    var greenStudents = this.props.students.filter(function(student) {
      var greenMarksCount = student.evaluations
      .filter(function(evaluation) {
        return evaluation.color === "green"
      })
      .length
      var yellowMarksCount = student.evaluations
      .filter(function(evaluation) {
        return evaluation.color === "yellow"
      })
      .length
      var redMarksCount = student.evaluations
      .filter(function(evaluation) {
        return evaluation.color === "red"
      })
      .length

      if (greenMarksCount >= yellowMarksCount && greenMarksCount >= redMarksCount) {
        return true
      } else {
        return false
      }
    })
    var yellowStudents = this.props.students.filter(function(student) {
      var greenMarksCount = student.evaluations
      .filter(function(evaluation) {
        return evaluation.color === "green"
      })
      .length
      var yellowMarksCount = student.evaluations
      .filter(function(evaluation) {
        return evaluation.color === "yellow"
      })
      .length
      var redMarksCount = student.evaluations
      .filter(function(evaluation) {
        return evaluation.color === "red"
      })
      .length

      if (yellowMarksCount >= greenMarksCount && yellowMarksCount >= redMarksCount) {
        return true
      } else {
        return false
      }
    })
    var redStudents = this.props.students.filter(function(student) {
      var greenMarksCount = student.evaluations
      .filter(function(evaluation) {
        return evaluation.color === "green"
      })
      .length
      var yellowMarksCount = student.evaluations
      .filter(function(evaluation) {
        return evaluation.color === "yellow"
      })
      .length
      var redMarksCount = student.evaluations
      .filter(function(evaluation) {
        return evaluation.color === "red"
      })
      .length

      if (redMarksCount >= yellowMarksCount && redMarksCount >= greenMarksCount) {
        return true
      } else {
        return false
      }
    })

    let selectedArray;

    var randomNumber = Math.floor(Math.random() * 101);

    if (randomNumber >= 0 && randomNumber <= 17) {
      selectedArray = greenStudents
    } else if(randomNumber >= 18 && randomNumber <= 50) {
      selectedArray = yellowStudents
    } else if (randomNumber >= 51 && randomNumber <= 100) {
      selectedArray = redStudents
    };

    var selectedStudent = selectedArray[Math.floor(Math.random()*selectedArray.length)];
    alert(selectedStudent.name)
  }

  renderStudent(student, index ) {
    return (
      <StudentItem key={index} {...student} />
    )
  }
  render() {
    const { title, students, _id } = this.props

    if (!title) return null

    return(
      <div className="batch page">
      <StudentEditor batchId={_id} />
        <Title content={ title } />
        <div className="actions">
          <button className="primary buttonAsk" onClick={this.selectStudent.bind(this)}>Ask question</button>
        </div>
        <main>
          {students.map(this.renderStudent)}
        </main>

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
export default connect(mapStateToProps, { fetchBatches})(BatchPage)
