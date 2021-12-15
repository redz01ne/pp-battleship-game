import React, {Component} from "react";

import GameGrid from "../generic/game-grid";

class DemoGame extends Component {
    constructor(props) {
        super(props);

        this.state = {
            moveDelay: 2e3
        };

        this.moveTimerId = null;
    }

    componentDidMount() {
        const {moveDelay} = this.state;
        const {makeMove} = this.props;

        this.moveTimerId = setInterval(makeMove, moveDelay);
    }

    componentWillUnmount() {
        if (this.moveTimerId) clearInterval(this.moveTimerId);
    }

    render() {
        const {
            playerOneGameMap,
            playerTwoGameMap,
        } = this.props;

        return (
            <div>
                <GameGrid gridMap={playerOneGameMap}/>
                <GameGrid gridMap={playerTwoGameMap}/>
            </div>
        );
    }
}

export default DemoGame;
