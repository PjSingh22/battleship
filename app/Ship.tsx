import { useState } from 'react'

function Ship() {
  const [length, setLength] = useState<number>(0)
  const [orientation, setOrientation] = useState<string>('horizontal')
  const [numberOfHits, setNumberOfHits] = useState<number>(0)
  const [isSunk, setIsSunk] = useState<boolean>(false)

  return (
    <></>
  )
}

export default Ship
