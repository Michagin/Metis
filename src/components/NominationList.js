import React from 'react'
import Game from './Game'

export const NominationList = ({games, onDelete}) => {
    
    return (
        <>
            {games.map((game) => (
                <Game
                    key={game.id}
                    game={game}
                    onDelete={onDelete}           
                />
            ))}
        </>
    )
}

export default NominationList