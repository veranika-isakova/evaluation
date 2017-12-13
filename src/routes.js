import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import SignIn from './users/SignIn'

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Route path="/sign-in" component={SignIn} />
      </div>
    )
  }
}
