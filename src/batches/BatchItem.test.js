
import React from 'react'
import chai, { expect } from 'chai'
import { shallow } from 'enzyme'
import chaiEnzyme from 'chai-enzyme'
import { BatchItem } from './BatchItem'
import Title from '../components/Title'

chai.use(chaiEnzyme())

const batch = {
    title: 'Class 10',
    startDate: '13-11-2017',
    endDate: '13-11-2017',
}

describe('<BatchItem />', () => {
  const container = shallow(<BatchItem { ...batch } />)

  it('is wrapped in a article tag with class name "BatchItem"', () => {
    expect(container).to.have.tagName('article')
    expect(container).to.have.className('BatchItem')
  })

  it('contains a title', () => {
    expect(container).to.contain(<Title content={batch.title} className="level-2" />)
  })
})
