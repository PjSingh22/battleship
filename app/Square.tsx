"use client";
import React, { useState } from 'react'

function Square({ val }: { val: number }) {
  const [value, setValue] = useState(val || null)
  const [hasShip, setHasShip] = useState(false)
  const [isHit, setIsHit] = useState(false)
  const [ship, setShip] = useState(null)

  return (
    <div className='border-[1px] border-black w-10 h-10'>
    </div>
  )
}

export default Square
