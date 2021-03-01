import React from 'react';
import PropTypes from 'prop-types';
import './card.css';


const Card = ({solved, disabled, id, width, height, flipped, handleClick, type, key}) => {
    return (
        <div
            className={`flip-container ${flipped ? 'flipped' : ''}`}
            style={{
                width, height
            }}
            onClick={() => disabled ? null : handleClick(id)}>
            <div className="flipper">
                <img style={{height,width}}
                     className={flipped ? 'front' : 'back'}
                     src={(flipped||solved) ? `/img/${type}.png` : `/img/back.png`}
                     alt={flipped ?  "" : '?'}
                />
            </div>
        </div>
    );
}

Card.protoTypes={
    disabled: PropTypes.bool.isRequired,
    key: PropTypes.isRequired,
    type: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    flipped: PropTypes.bool.isRequired,
    solved: PropTypes.bool.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    handleClick: PropTypes.func.isRequired,
}

export default Card;