import React from 'react'
import Square from './Square'

function PlayerBoard() {
  return (
    <div>
      <div id="player-board" className='grid grid-cols-10'>
        {Array(100).fill(null).map((_, i) => (
          <Square key={i} val={i + 1} placed={false} />
        ))}
      </div>
      <button className='underline text-blue-700 hover:text-blue-900'>Randomize</button>
    </div>
  )
}

export default PlayerBoard
