import React from 'react';
import './Rating.css';

class Rating extends React.Component {

    render() {

        return (
            
            <div className="rating">
                <button onClick={ () => this.props.giveLike(this.props.id) }>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Bot%C3%B3n_Me_gusta.svg/240px-Bot%C3%B3n_Me_gusta.svg.png">
                    </img>
                </button>
                <div className="numberPositive">
                    {this.props.positive}
                </div>
                <button onClick={ () => this.props.giveDislike(this.props.id) }>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Dislike.svg/1200px-Dislike.svg.png">
                    </img>
                </button>
                <div className="numberNegative">
                    {this.props.negative}
                </div>
            </div>
        );
    }
}

export default Rating;