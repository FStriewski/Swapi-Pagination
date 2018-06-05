import PlanetContainer from '../components/details/PlanetContainer'

import React from 'react'
import { shallow } from 'enzyme'


describe('<PlanetContainer />', () => {
    const app = shallow(<PlanetContainer />)

    it('wraps everything in a div tag', () => {
        expect(app).toHaveTagName('div')
    })

})