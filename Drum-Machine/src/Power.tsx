// import React from 'react'
import { useState } from 'react'

let mainpower = false

const Power = () => {

    
    const [power, setPower] = useState(false);

    const togglePower = () =>{
        setPower((prevpower) => !prevpower)
        console.log(power)
      }
      mainpower = power


  return (
    <>
      <button className='power' onClick={togglePower}>{mainpower ? 'Power On' : 'Power Off'}</button>
    </>
  )
}

export default Power
export {mainpower}