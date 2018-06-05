import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { filterByName, filterByGender, filterBySpecies } from '../../actions/filter'
import '../../styles/css/topBarUnit.css'

// Named export needed for testing
export class FilterBar extends React.Component {
    static propTypes = {
        filterByName: PropTypes.func,
        filterByGender: PropTypes.func,
        filterBySpecies: PropTypes.func,
    }

    toggleVisibility = () => {
        let el = document.getElementById("wrapper");
        (el.style.display !== 'block') ? el.style.display = 'block' : el.style.display = 'none';
    }

    handleName= (e) => {
        this.props.filterByName(e.target.value.toLowerCase())
    }

    handleGender = (e) => {
        this.props.filterByGender(e.target.value.toLowerCase())
    }

    handleSpecies= (e) => {
        this.props.filterBySpecies(e.target.value)
    }

    render() {
        const {  species } = this.props
        if (!species) return ""

        let speciesNames=[]
        speciesNames.push("All")
        for (let s in species) {
            speciesNames.push(species[s])
        }

        return (
            <div >
                <div className="filterBarContainer" onClick={this.toggleVisibility}> <span id="filterButton">&#x21D5; Filter &#x21D5; </span></div>
                <div id="wrapper">
                    <div id="filters">
                        <div className="textFilter"><span>Name:</span>
                            <input type="text" placeholder="search" onChange={this.handleName} />
                        </div>
                        <div className="genderFilter"><span>Gender:</span>
                            <select name="genderSelect" onChange={this.handleGender}>
                                <option value="all">All</option>
                                <option value="female">Female</option>
                                <option value="male">Male</option>
                                <option value="n/a">n/a</option>
                            </select>
                        </div>
                        <div className="speciesFilter"><span>Species:</span>
                            <select name="genderSelect" onChange={this.handleSpecies}>
                             {speciesNames.map( s => 
                                 <option key={s} value={s}>{s}</option>
                            )}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    people: state.people,
    species: state.species,
})

export default connect(mapStateToProps, { filterByName, filterByGender, filterBySpecies })(FilterBar)