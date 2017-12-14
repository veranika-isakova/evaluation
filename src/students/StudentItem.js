import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Avatar from 'material-ui/Avatar';
import './StudentItem.css'

const style = {border: 0, objectFit: 'cover', margin: 5};

class StudentItem extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
  }

  render() {
    const { _id, name, photo } = this.props

    return(
      <article className="StudentItem">
      <header>
      <Avatar
      src={photo}
      style={style}
      size={50}/>

      <Link to={`/students/${_id}`}>{name}</Link>
      </header>
      </article>
    )
  }
}

const mapStateToProps = ({ students }) => ({ students })

export default connect(mapStateToProps)(StudentItem)
