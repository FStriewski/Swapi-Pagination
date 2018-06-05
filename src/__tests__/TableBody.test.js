import {TableBody} from '../components/table/TableBody'

import React from 'react'
import { shallow } from 'enzyme'


describe('<TableBody />', () => {
    const app = shallow(<TableBody />)

    it('wraps everything in a div tag', () => {
        expect(app).toHaveTagName('div')
    })

})