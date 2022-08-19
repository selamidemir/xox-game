import React from 'react';
import { useSelector } from 'react-redux';
import { selectItems, selectLastWinner } from '../redux/gameSlice';
import Item from './Item';
import Winner from './Winner';

function Board() {
    const items = useSelector(selectItems);
    const winner = useSelector(selectLastWinner);
    return (
        <div className='board'>
            {winner && <Winner />}
            {!winner && <div className='items'>
                {
                    items.map((item, key) => <Item dataIndex={key} sign={item} key={key} />)
                }
            </div>
            }
        </div>
    );
}

export default Board;