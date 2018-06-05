import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchCharacter } from '../../actions/people'
import { Link } from 'react-router-dom'
import '../../styles/css/detailsUnit.css'

 export class DetailsCard extends React.Component {
     static propTypes = {
         fetchCharacter: PropTypes.func.isRequired,
     }


     componentWillMount(props) {
           this.props.fetchCharacter(this.props.match.params.id)
    }

    render() {
        const { people } = this.props
        if (!people) return null

        return (
            <div className="detailsCardContainer">
                <h4>{people.name}</h4>

                <p> The subject is of <span>{people.gender}</span> sex, approximately <span>{people.height}</span> in height and <span>{people.mass}</span> in mass. It has  <span>{people.skin_color}</span> skin and <span>{people.hair_color} </span>hair.</p>

                <p> Estimated year of birth: <span>{people.birth_year}</span></p>

                <br />

                <footer className="detailsFooter">
                    <Link to="/people"><button className="backButton" type="button">Back </button></Link>
                </footer>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
        people: state.people
})


export default connect(mapStateToProps, { fetchCharacter })(DetailsCard)