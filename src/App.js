import './App.css';
import React, {useState, useEffect} from 'react';
import Board from "./components/Board";
import initializeDeck from './deck';
import Popup from "./components/Popup";

let startTime = null;

function App() {
    const [flipped, setFlipped] = useState([]);
    const [cards, setCards] = useState([]);
    const [dimension, setDimension] = useState(400);
    const [solved, setSolved] = useState([]);
    const [disabled, setDisabled] = useState(false);


    const handleClick = (id) => {
        setDisabled(true);
        if (solved.length===0 && flipped.length===0 && startTime===null) {
            startTime = Date.now();
        }
        if (flipped.length === 0) {
            setFlipped([id]);
            setDisabled(false);
        } else {
            if (sameCardClicked(id)) return
            setFlipped([flipped[0], id]);
            if (isMatch(id)) {
                setSolved([...solved, flipped[0], id]);
                resetCards();
            } else {
                setTimeout(resetCards, 1000);
            }
        }
    };

    const resetCards = () => {
        setFlipped([]);
        setDisabled(false);
    }

    const isMatch = (id) => {
        const clicked = cards.find(card => card.id === id);
        const flippedCard = cards.find(card => flipped[0] === card.id);

        return flippedCard.type === clicked.type;
    };

    const sameCardClicked = (id) => flipped.includes(id);

    useEffect(() => {
        resizeBoard();
        setCards(initializeDeck());

    }, []);

    useEffect(() => {
        preloadImages();
    }, [cards])

    const resizeBoard = () => {
        setDimension(Math.min(document.documentElement.clientWidth, document.documentElement.clientHeight))
    };

    const preloadImages = () => {
        cards.map(card => {
            const src = `/ing/${card.type}.png`
            new Image().src = src;
        })
    }

    useEffect(() => {
        const resizeListener = window.addEventListener('resize', resizeBoard);
        return () => window.removeEventListener('resize', resizeListener);
    });

    const closePopup = () => {
        setSolved([]);
        resetCards();
    }

    return (
        <div className="App">
            <h1>Memory Card Game</h1>
            <h2>Remember where the cards were?</h2>

            <Board
                dimension={dimension}
                cards={cards}
                flipped={flipped}
                handleClick={handleClick}
                disabled={disabled}
                solved={solved}
            />
            {solved.length === cards.length ? <Popup closePopup={closePopup} startTime={startTime}/> : null}
        </div>
    );
}

export default App;
