import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentGamer, selectGamerOne, selectGamerTwo, selectIsStarted, startGame } from '../redux/gameSlice';

function ScoreBoard() {
    const isStarted = useSelector(selectIsStarted);
    const gamerOne = useSelector(selectGamerOne);
    const gamerTwo = useSelector(selectGamerTwo);
    const currentGamer = useSelector(selectCurrentGamer);
    const dispatch = useDispatch();

    const handleStartGame = (e) => {
        e.preventDefault();
        dispatch(startGame());
    }

    return (
        <div className='score-board'>
            <div className='score-board-item'>&nbsp;</div>
            <div className={`score-board-item ${currentGamer.sign === gamerOne.sign ? ' current-gamer' : ''} `}>GAMER ({gamerOne.sign})</div>
            <div className='score-board-item'><button onClick={(e) => handleStartGame(e)}>{!isStarted ? "START" : "RESTART"}</button></div>
            <div className={`score-board-item ${currentGamer.sign === gamerTwo.sign ? ' current-gamer' : ''} `}>GAMER ({gamerTwo.sign})</div>
            <div className='score-board-item'>&nbsp;</div>
            <div className='score-board-item'>&nbsp;</div>
            <div className='score-board-item gamer-score'>{gamerOne.score}</div>
            <div className='score-board-item'>&nbsp;</div>
            <div className='score-board-item gamer-score'>{gamerTwo.score}</div>
            <div className='score-board-item'>&nbsp;</div>
        </div>
    );
}

export default ScoreBoard;