import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import BatchesContainer from './batches/BatchesContainer'
import BatchPage from './batches/BatchPage'
import StudentPage from './students/StudentPage'
import SignIn from './users/SignIn'

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={BatchesContainer} />
        <Route path="/batches/:batchId" component={BatchPage} />
        <Route path="/students/:studentId" component={StudentPage} />
        <Route path="/sign-in" component={SignIn} />
      </div>
    )
  }
}
