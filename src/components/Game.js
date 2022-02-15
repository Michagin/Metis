import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'

const Game = ({ game, onDelete }) => {
    return (
        <div className='game'>
            <h3>
                {game.title} <FaTrashAlt style={{ color: 'red', cursor: 'pointer'}} onClick={() => onDelete(game.id)} />
            </h3>
            <p>
                {game.year}
            </p>
        </div>
    )
}


export default Game
