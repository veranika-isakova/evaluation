import React, { PureComponent } from 'react'
import toMarkdown from 'to-markdown'
import { connect } from 'react-redux'
import 'medium-editor/dist/css/medium-editor.css'
import 'medium-editor/dist/css/themes/default.css'
import createEvaluation from '../actions/evaluations/create'
//import './BatchEditor.css'

class EvaluationEditor extends PureComponent {
  constructor(props) {
    super()

    const { color, evaluationDate, remark, } = props

    this.state = {
      color,
      evaluationDate,
      remark,
    }
  }

  updateColor(event) {
    if (event.keyCode === 13) {
      event.preventDefault()
      this.refs.summary.medium.elements[0].focus()
    }
    this.setState({
      title: this.refs.color.value
    })
  }

  updateEvaluationDate(event) {
    if (event.keyCode === 13) {
      event.preventDefault()
      this.refs.summary.medium.elements[0].focus()
    }
    this.setState({
      startDate: this.refs.evaluationDate.value
    })
  }

  updateRemark(event) {
    if (event.keyCode === 13) {
      event.preventDefault()
      this.refs.summary.medium.elements[0].focus()
    }
    this.setState({
      endDate: this.refs.remark.value
    })
  }

  saveEvaluation() {
    console.table(this.state)

    const evaluation = {
      ...this.state,
      evaluationDate: toMarkdown(this.state.evaluationDate),
      remark: toMarkdown(this.state.remark),
    }

    console.table(evaluation)

    this.props.save(evaluation)
  }

  render() {
    return (
      <div className="editor">
      <div>
      <label>Mark: </label>
        <input
          type="text"
          ref="color"
          className="color"
          placeholder="Mark"
          defaultValue={this.state.color}
          onChange={this.updateColor.bind(this)}
          onKeyUp={this.updateColor.bind(this)} />
      </div>
        <div>
        <label>Evaluation date: </label>
          <input
            type="date"
            ref="evaluationDate"
            className="evaluationDate"
            defaultValue={this.state.evaluationDate}
            onChange={this.updateEvaluationDate.bind(this)}
            onKeyUp={this.updateEvaluationDate.bind(this)} />
          </div>
        <div>
        <label>Remarks: </label>
            <input
              type="text"
              ref="remark"
              className="remark"
              defaultValue={this.state.remark}
              onChange={this.updateRemark.bind(this)}
              onKeyUp={this.updateRemark.bind(this)} />
        </div>
        <div className="actions">
          <button className="primary" onClick={this.saveEvaluation.bind(this)}>Save</button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = { save: createEvaluation }

export default connect(null, mapDispatchToProps)(EvaluationEditor)
