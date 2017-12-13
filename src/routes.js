import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import BatchesContainer from './batches/BatchesContainer'
import SignIn from './users/SignIn'

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={BatchesContainer} />
        <Route path="/sign-in" component={SignIn} />
      </div>
    )
  }
}
