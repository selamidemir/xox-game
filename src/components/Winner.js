import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectLastWinner, startGame } from '../redux/gameSlice';

function Winner() {
    const winner = useSelector(selectLastWinner);
    const dispatch = useDispatch();

    const handleStartGame = (e) => {
        e.preventDefault();
        dispatch(startGame());
    }

    return (
        <div className='winner-box'>
            {winner && <div className='winner' onClick={(e) => handleStartGame(e)}>{winner}</div>}
        </div>
    );
}

export default Winner;