import TableUnit from '../components/table/TableUnit'
import {FilterBar} from '../components/table/FilterBar'
import {TableBody} from '../components/table/TableBody'

import React from 'react'
import { shallow } from 'enzyme'


describe('<TableUnit />', () => {
    const app = shallow(<TableUnit />)
    const filterbar = <FilterBar />
    const tablebody = <TableBody />

    it('wraps everything in a div tag', () => {
        expect(app).toHaveTagName('div')
    })

    it('contains a FilterBar', () => {
        expect(app).toContainReact(filterbar)
    })
    it('contains a TableBody', () => {
        expect(app).toContainReact(tablebody)
    })


})