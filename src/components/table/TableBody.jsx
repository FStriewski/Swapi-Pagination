import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchAllPeople, fetchMorePeople } from '../../actions/people'
import { fetchAllSpecies } from '../../actions/species'
import { fetchAllPlanets } from '../../actions/planets'
import { fetchAllShips } from '../../actions/starships'
import InfiniteScroll from 'react-infinite-scroller';

import { Link } from 'react-router-dom'
import '../../styles/css/tableUnit.css'

// Named export needed for testing:
export class TableBody extends React.Component {
    static propTypes = {
        filter: PropTypes.shape({
            term: PropTypes.string,
            gender: PropTypes.string,
            race: PropTypes.string,
        }),
        fetchAllPeople: PropTypes.func,
        fetchAllSpecies: PropTypes.func,
        fetchAllPlanets: PropTypes.func,
        fetchMorePeople: PropTypes.func,
    }

    componentWillMount() {
        this.props.fetchAllPeople()
        this.props.fetchAllSpecies()
        this.props.fetchAllPlanets()
        this.props.fetchAllShips()
    }

    loadMore = (url) => {
        this.props.fetchMorePeople(url)
    }

    decodeSpecies = (obj, val) => {
        return Object.keys(obj).find(key => obj[key] === val);
    }

    render() {
        const { people, species, planets } = this.props
        if (!people.results) return ""
        if (!species) return ""
            
        let filteredNames =
            people.results
                .filter(i =>
                    (this.props.filter.term === "") ? true : i.name.toLowerCase().includes(this.props.filter.term)
                ).filter(i =>
                    (this.props.filter.gender === "all") ? true : i.gender.toLowerCase() === (this.props.filter.gender)
                ).filter(i =>
                    (this.props.filter.race === "all") ? true : i.species[0] === this.decodeSpecies(species, this.props.filter.race)
                )
            
        return (

            <InfiniteScroll
                pageStart={0}
                loadMore={() => this.loadMore(people.next)}
                hasMore={true || false}
                loader={<div className="loader" key={0}>Loading ...</div>}
            >
            <div className="tableContainer">
                <table >
                    <thead id="tableHeader">
                        <tr>
                            <td >Name</td>
                            <td >Gender</td>
                            <td >Birthyear</td>
                            <td >Species</td>
                            <td >Homeworld</td>
                            <td >Link</td>
                        </tr>
                    </thead>
                    <tbody className="tableBody">
                        {filteredNames
                            .map(i => {
                                let id = i.url.replace(/^\D+/g, ''
                                )

                                return (
                                    <tr key={i.id}>
                                        <td ><Link to={`/people/${id}`}>{i.name}</Link></td>
                                        <td >{i.gender}</td>
                                        <td >{i.birth_year}</td>
                                        <td >{species[i.species] || "unknown"}</td>
                                        <td >{planets[i.homeworld] || "unknown"}</td>
                                        <td ><Link to={`/people/${id}`}> &#x21D2;...Profile</Link></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            </InfiniteScroll>

        )
    }
}

const mapStateToProps = (state, props) => ({
    people: state.people,
    species: state.species,
    planets: state.planets,
    filter: state.filter
})

export default connect(mapStateToProps, { fetchAllPeople, fetchMorePeople, fetchAllSpecies, fetchAllPlanets, fetchAllShips })(TableBody)
