import React from 'react'
import Square from './Square'

function ComputerBoard() {
  return (
    <div>
      <div id="computer-board" className='grid grid-cols-10'>
        {Array(100).fill(null).map((_, i) => (
          <Square key={i} val={i + 1} />
        ))}
      </div>
    </div>
  )
}

export default ComputerBoard
