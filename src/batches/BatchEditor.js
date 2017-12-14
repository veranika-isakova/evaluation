import React, { PureComponent } from 'react'
import toMarkdown from 'to-markdown'
import { connect } from 'react-redux'
import 'medium-editor/dist/css/medium-editor.css'
import 'medium-editor/dist/css/themes/default.css'
import createBatch from '../actions/batches/create'
import './BatchEditor.css'

class BatchEditor extends PureComponent {
  constructor(props) {
    super()

    const { title, startDate, endDate, } = props

    this.state = {
      title,
      startDate,
      endDate,
    }
  }

  updateTitle(event) {
    if (event.keyCode === 13) {
      event.preventDefault()
      this.refs.summary.medium.elements[0].focus()
    }
    this.setState({
      title: this.refs.title.value
    })
  }

  updateStartDate(event) {
    if (event.keyCode === 13) {
      event.preventDefault()
      this.refs.summary.medium.elements[0].focus()
    }
    this.setState({
      startDate: this.refs.startDate.value
    })
  }

  updateEndDate(event) {
    if (event.keyCode === 13) {
      event.preventDefault()
      this.refs.summary.medium.elements[0].focus()
    }
    this.setState({
      endDate: this.refs.endDate.value
    })
  }

  saveBatch() {
    console.table(this.state)

    const batch = {
      ...this.state,
      startDate: toMarkdown(this.state.startDate),
      endDate: toMarkdown(this.state.endDate),
    }

    console.table(batch)

    this.props.save(batch)
  }

  render() {
    return (
      <div className="editor">
      <div>
      <label>New class: </label>
        <input
          type="text"
          ref="title"
          className="title"
          placeholder="Class"
          defaultValue={this.state.title}
          onChange={this.updateTitle.bind(this)}
          onKeyUp={this.updateTitle.bind(this)} />
      </div>
        <div>
        <label>Start date: </label>
          <input
            type="date"
            ref="startDate"
            className="startDate"
            defaultValue={this.state.startDate}
            onChange={this.updateStartDate.bind(this)}
            onKeyUp={this.updateStartDate.bind(this)} />
          </div>
        <div>
        <label>End date: </label>
            <input
              type="date"
              ref="endDate"
              className="endDate"
              defaultValue={this.state.endDate}
              onChange={this.updateEndDate.bind(this)}
              onKeyUp={this.updateEndDate.bind(this)} />
        </div>
        <div className="actions">
          <button className="primary" onClick={this.saveBatch.bind(this)}>Save</button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = { save: createBatch }

export default connect(null, mapDispatchToProps)(BatchEditor)
