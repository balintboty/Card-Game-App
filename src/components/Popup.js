import React from 'react'

const Popup = ({closePopup, startTime}) =>{
    const difference=Date.now()-startTime;
    const min=Math.floor((difference / 1000 / 60) % 60);
    const sec=Math.floor((difference / 1000) % 60);
    return (
        <section className="popup">
            <div className="content">
                <h1>WELL DONE!!! GAME COMPLETED</h1>
                <h1>Your Time:</h1>
                <h1 className="timer">{min}:{sec}</h1>
                <button className="close" onClick={() => closePopup()}>Close</button>
            </div>
        </section>
    );
}

export default Popup;