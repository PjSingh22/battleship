"use client";
import React, { useEffect, useState } from 'react'

interface SquareProps {
  val: number;
  placed: boolean;
}

function Square({ val, placed }: SquareProps) {
  const [value, setValue] = useState<number>(val)
  const [hasShip, setHasShip] = useState<boolean>(false)
  const [isHit, setIsHit] = useState<boolean>(false)
  const [ship, setShip] = useState(null)

  useEffect(() => {
    if (placed === true) {
      setHasShip(true)
    } else {
      setHasShip(false)
    }
  }, [placed])

  const handleClick = () => {
    console.log(value)
  }

  const containsShip = hasShip ? 'bg-black' : ''

  return (
    <div onClick={handleClick} className={`border-[1px] border-black w-10 h-10 ${containsShip}`}>
    </div>
  )
}

export default Square
