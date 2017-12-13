
import React, { PureComponent } from 'react'
import Editor from 'react-medium-editor'
import toMarkdown from 'to-markdown'
import { connect } from 'react-redux'
import 'medium-editor/dist/css/medium-editor.css'
import 'medium-editor/dist/css/themes/default.css'
import createBatch from '../actions/batches/create'
//import './RecipeEditor.css'

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

  updateIntro(text, medium) {
    this.setState({
      startDate: text,
      endDate: text
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
        <input
          type="text"
          ref="title"
          className="title"
          placeholder="Title"
          defaultValue={this.state.title}
          onChange={this.updateTitle.bind(this)}
          onKeyUp={this.updateTitle.bind(this)} />

        <Editor
          ref="startDate"
          options={{
            placeholder: {text: 'Please write the date when the school begins'}
          }}
          onChange={this.updateIntro.bind(this)}
          text={this.state.startDate} />

          <Editor
            ref="endDate"
            options={{
              placeholder: {text: 'Please write the date when the school ends'}
            }}
            onChange={this.updateIntro.bind(this)}
            text={this.state.endDate} />

        <div className="actions">
          <button className="primary" onClick={this.saveBatch.bind(this)}>Save</button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = { save: createBatch }

export default connect(null, mapDispatchToProps)(BatchEditor)
