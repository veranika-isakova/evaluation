import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetch as fetchBatches } from '../actions/batches'
import Title from '../components/Title'
import StudentItem from '../students/StudentItem'
import StudentEditor from '../students/StudentEditor'


export class BatchPage extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
  }

  componentWillMount() {
    this.props.fetchBatches()
  }
  selectStudent() {
    var selectedStudent = this.props.students[Math.floor(Math.random()*this.props.students.length)];
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
          <button className="primary" onClick={this.selectStudent.bind(this)}>Ask question</button>
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
