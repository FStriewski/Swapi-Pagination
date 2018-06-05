import DetailsCard from '../components/details/PlanetContainer'

import React from 'react'
import { shallow } from 'enzyme'


describe('<DetailsCard />', () => {
    const app = shallow(<DetailsCard />)

    it('wraps everything in a div tag', () => {
        expect(app).toHaveTagName('div')
    })

})