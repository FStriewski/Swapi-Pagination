import React from 'react'
import { connect } from 'react-redux'
// import { filterByScore } from '../../actions/filter'
// import { fetchAllCompanys } from '../../actions/company'


// const styles = theme => ({
//     sliderContainer: {
//         marginTop: 10,
//         marginLeft: -50,
//         width: "100%",
//     },
// });

class Slider extends React.Component {

    state = {
        sliderValue: 0,
    }

    decodeBirthyear = (people) => {
console.log(
   // people.results.map (c => c.birth_year.search("BBY")) ,

    people.results.map(c => {
        if (c.birth_year.search("BBY") > 0) {

            c.birth_year = c.birth_year.slice(0, 2 )
        }
        c.birth_year
        //.split("")
        //.replace(/^\D+/g, '') 
        //.join("")
    })
)
    }

    onSliderChange = (e) => {

        this.setState({ 
            sliderValue: e.target.value 
        });

        // const initialValue = this.props.companys.past[1]
        // const selection = initialValue.filter(company => company.score >= e.target.value )

        // return this.props.filterByScore(selection)
    }

    render() {
        const birthyear = this.decodeBirthyear(this.props.people)

        return (
            <div className="sliderContainer">
                <div>
                    <label htmlFor="score">Score ({this.state.sliderValue} - 10) </label>
                </div>
                <input id="score" className="Slider" type="range" value={this.state.sliderValue} min="0" max="10" onChange={this.onSliderChange} />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
})

export default  connect(mapStateToProps, {  })(Slider)


