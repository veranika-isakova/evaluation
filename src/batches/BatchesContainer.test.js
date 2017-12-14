import React from 'react'
import chai, { expect } from 'chai'
import { shallow } from 'enzyme'
import chaiEnzyme from 'chai-enzyme'
import { BatchesContainer } from './BatchesContainer'
import Title from '../components/Title'
import { BatchItem } from './BatchItem'
import batches from '../fixtures/batches'

chai.use(chaiEnzyme())

describe('<BatchesContainer />', () => {
  const container = shallow(<BatchesContainer batches={batches} />)

  it('is wrapped in a div with class name "BatchesContainer"', () => {
    expect(container).to.have.className('BatchesContainer')
  })

  it('contains a Title', () => {
    expect(container).to.have.descendants(Title)
  })

  it('sets the Title to "All classes"', () => {
    expect(container).to.contain(<Title content="All classes" />)
  })

  it('renders all batches as a BatchItem', () => {
    expect(container).to.have.exactly(batches.length).descendants(BatchItem)
  })
})
