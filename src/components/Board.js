import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

import './board.css';

const Board = ({solved, disabled, dimension, cards, flipped, handleClick}) => {
    return (
        <div className="board" style={{width:dimension, height: dimension, alignContent: "center"}}>
            {
                cards.map(card => {
                    return (
                        <Card
                            type={card.type}
                            key={card.key}
                            id={card.id}
                            width={dimension/5}
                            height={dimension/5}
                            back={card.back}
                            front={card.front}
                            flipped={flipped.includes(card.id)}
                            solved={solved.includes(card.id)}
                            handleClick={handleClick}
                            disabled={disabled || solved.includes(card.id)}
                        />
                    );
                })
            }
        </div>
    );
}

Board.protoTypes={
    disabled: PropTypes.bool.isRequired,
    dimension: PropTypes.number.isRequired,
    cards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    flipped: PropTypes.arrayOf(PropTypes.number).isRequired,
    solved: PropTypes.arrayOf(PropTypes.number).isRequired,
    handleClick: PropTypes.func.isRequired
}

export default Board;