import React from 'react'


export default class Slider extends React.Component {

    state = {
        sliderValue: 0,
    }

    onSliderChange = (e) => {

        this.setState({
            sliderValue: e.target.value
        });
    }


    render() {

        return (
            <div className="sliderContainer">
                <div>
                    <label htmlFor="score">Birth Year ({this.state.sliderValue} - 10) </label>
                </div>
                <input id="score" className="Slider" type="range" value={this.state.sliderValue} min="-10" max="10" onChange={this.onSliderChange} />
            </div>
        )
    }
}




