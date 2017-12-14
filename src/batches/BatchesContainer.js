import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { fetch as fetchBatches } from '../actions/batches'
import Title from '../components/Title'
import BatchItem from './BatchItem'
import BatchEditor from './BatchEditor'
import './BatchesContainer.css'

export class BatchesContainer extends PureComponent {
  componentWillMount() {
    if (this.props.currentUser) {
      this.props.dispatch(fetchBatches())
    }
  }

  renderBatch(batch, index) {
    return (
      <BatchItem className="batch-item" key={index} {...batch} />
    )
  }

  render() {
    const { batches, currentUser } = this.props
    //const { batches } = this.props

    if (!currentUser) { return null }

    return(
      <div className="BatchesContainer">
      <BatchEditor />
        <header>
          <Title content="All classes" />
        </header>

        <main>
          {batches.map(this.renderBatch)}
        </main>
      </div>
    )
  }
}

const mapStateToProps = ({ batches, currentUser }) => ({ batches, currentUser })

export default connect(mapStateToProps)(BatchesContainer)
