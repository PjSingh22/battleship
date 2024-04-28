
import React from 'react';
import PlayerBoard from './PlayerBoard';
import ComputerBoard from './ComputerBoard';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="font-bold text-[50px]">BATTLESHIP</h1>
      <div id="boards-container" className='flex w-full justify-evenly'>
        <PlayerBoard />
        <ComputerBoard />
      </div>
    </main>
  );
}
