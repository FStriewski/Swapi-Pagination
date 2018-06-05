import {FilterBar} from '../components/table/FilterBar'

import React from 'react'
import { shallow } from 'enzyme'


describe('<FilterBar />', () => {
    const app = shallow(<FilterBar />)

    it('wraps everything in a div tag', () => {
        expect(app).toHaveTagName('div')
    })


})