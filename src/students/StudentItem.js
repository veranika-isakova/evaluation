import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Avatar from 'material-ui/Avatar';

const style = {border: 0, objectFit: 'cover', margin: 5};

class StudentItem extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
  }

  render() {
    const { _id, name, photo } = this.props

    return(
      <div>
      <Avatar
      src={photo}
      style={style}
      size={50}/>

      <Link to={`/students/${_id}`}>{name}</Link>
      </div>
    )
  }
}

const mapStateToProps = ({ students }) => ({ students })

export default connect(mapStateToProps)(StudentItem)
