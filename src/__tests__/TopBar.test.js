import TopBar from '../components/topbar/TopBar'

import React from 'react'
import { shallow } from 'enzyme'


describe('<TopBar />', () => {
    const app = shallow(<TopBar />)

    it('wraps everything in a div tag', () => {
        expect(app).toHaveTagName('div')
    })

})