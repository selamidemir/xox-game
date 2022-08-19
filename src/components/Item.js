import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentGamer, selectIsStarted, setItem } from '../redux/gameSlice';

function Item({ dataIndex, sign }) {
    const dispatch = useDispatch();
    const isStarted = useSelector(selectIsStarted);
    const currentGamer = useSelector(selectCurrentGamer);

    const handleClick = e => {
        e.preventDefault();
        const audio = currentGamer.sign === 'X' ? new Audio('x-click.mp3') : new Audio('o-click.mp3');
        const index = e.target.getAttribute('data-item-index');
        const selected = e.target.getAttribute('data-item-selected');

        if(!isStarted || selected !== '') return;
        audio.play();
        dispatch(setItem(parseInt(index)));
    }

    return (
        <div data-item-index={dataIndex} data-item-selected={sign} className='item' onClick={e => handleClick(e)}>
            {sign}
        </div>
    )
}

export default Item;