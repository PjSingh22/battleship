
import React from 'react';
import Square from './Square'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="font-bold text-[50px]">BATTLESHIP</h1>
      <div id="boards-container" className='flex w-full justify-evenly'>
        <div id="player-board" className='grid grid-cols-10'>
          {Array(100).fill(null).map((_, i) => (
            <Square key={i} val={i + 1} />
          ))}
        </div>
        <div id="computer-board" className='grid grid-cols-10'>
          {Array(100).fill(null).map((_, i) => (
            <Square key={i} val={i + 1} />
          ))}
        </div>
      </div>
    </main>
  );
}
