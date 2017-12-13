import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Title from '../components/Title'


class StudentItem extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
  }

  render() {
    const { _id, name, photo } = this.props

    return(
      <article className="StudenItem">
        <header>
          <Link to={`/students/${_id}`}>
            <Title content={name} className="level-2" />
          </Link>
        </header>

        <div>
          <p><img src={ photo } alt='' /></p>
        </div>
      </article>
    )
  }
}

const mapStateToProps = ({ students }) => ({ students })

export default connect(mapStateToProps)(StudentItem)
