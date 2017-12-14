import React, { PureComponent } from 'react'
//import toMarkdown from 'to-markdown'
import { connect } from 'react-redux'
import 'medium-editor/dist/css/medium-editor.css'
import 'medium-editor/dist/css/themes/default.css'
import createStudent from '../actions/students/create'
import './StudentEditor.css'

class StudentEditor extends PureComponent {
  constructor(props) {
    super()

    const { name, photo } = props

    this.state = {
      name,
      photo,
    }
  }

  updateName(event) {
    if (event.keyCode === 13) {
      event.preventDefault()
      this.refs.summary.medium.elements[0].focus()
    }
    this.setState({
      name: this.refs.name.value
    })
  }
  updatePhoto(event) {
    this.setState({
      photo: this.refs.photo.value
    })
  }

  saveStudent() {
    console.table(this.state)

    const student = {
      ...this.state,
    }

    console.table(student)

    this.props.save(student, this.props.batchId)
  }

  render() {
    return (
      <div className="editor">
      <div>
      <label>New student: </label>
        <input
          type="text"
          ref="name"
          className="name"
          placeholder="Full name"
          defaultValue={this.state.name}
          onChange={this.updateName.bind(this)}
          onKeyUp={this.updateName.bind(this)} />
      </div>
      <div>
      <label>Photo: </label>
        <input
          type="text"
          ref="photo"
          className="photo"
          placeholder="Photo URL"
          defaultValue={this.state.photo}
          onChange={this.updatePhoto.bind(this)}
          onKeyUp={this.updatePhoto.bind(this)} />
      </div>
        <div className="actions">
          <button className="primary" onClick={this.saveStudent.bind(this)}>Save</button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = { save: createStudent }

export default connect(null, mapDispatchToProps)(StudentEditor)
