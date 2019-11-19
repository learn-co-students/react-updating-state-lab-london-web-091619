import React from 'react';

class DigitalClicker extends React.Component {

    state = {
        timesClicked: 0
    }

    handleClickEvent = () => {
        this.setState(previousState => ({
            timesClicked: previousState.timesClicked + 1
        }))
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClickEvent}>{this.state.timesClicked}</button>
            </div>
        )
    }
}

export default DigitalClicker;