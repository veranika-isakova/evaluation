import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { fetch as fetchStudents } from '../actions/students'
import Title from '../components/Title'
import StudentItem from './StudentItem'
import './StudentsContainer.css'



class StudentsContainer extends PureComponent {
  componentWillMount() {
    //if (this.props.currentUser) {
      this.props.dispatch(fetchStudents())
    //}
  }

  renderStudent(student, index) {
    return (
      <StudentItem className="student-item" key={index} {...student} />
    )
  }

  render() {
    //const { students, currentUser } = this.props
    const { students } = this.props

    //if (!currentUser) { return null }

    return(
      <div className="StudentsContainer">

        <header>
          <Title content="All students" />
        </header>

        <main>
          {students.map(this.renderStudent)}
        </main>
      </div>
    )
  }
}

const mapStateToProps = ({ students, currentUser }) => ({ students, currentUser })

export default connect(mapStateToProps)(StudentsContainer)
