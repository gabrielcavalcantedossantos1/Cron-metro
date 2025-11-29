import './Timer.css'
import TimerDisplay from './TimerDisplay'
import LapList from './LapList'
import TimerControls from './TimerControls'
import { useState,useEffect } from 'react'

const Timer = () => {

  const [miliSegundos,setMiliSegundos] = useState(0)
  const [timerOn,setTimerOn] = useState(false)
  const [Laps,setLaps] = useState([])

  const formatarTempo = () =>{
    const minutos = ('0' + (Math.floor(miliSegundos/60000)%60)).slice(-2)
    const segundos = ('0' + (Math.floor(miliSegundos/1000)%60)).slice(-2)
    const sentesimos = ('0' + (Math.floor(miliSegundos/10)%100)).slice(-2)

    return `${minutos}:${segundos}:${sentesimos}`
  }

  const comecarTempo = () =>{
    return setInterval(() => {
      setMiliSegundos((prevMilliSegundos) => prevMilliSegundos + 10)
    }, 10);
  }

  const pararTempo = (intervalo) =>{
    clearInterval(intervalo)
    return intervalo
  }

      const resetarTempo = () =>{
        setMiliSegundos(0)
        setTimerOn(false)
        setLaps([])
      }

      const adicionarVolta = () =>{
        setLaps([...Laps,formatarTempo()])
        console.log(Laps)
      }

  useEffect(() =>{
    let intervalo = null

    if(timerOn){
      intervalo = comecarTempo(intervalo)
    } else {
      intervalo = pararTempo(intervalo)
    }

    return () =>pararTempo(intervalo)
  }, [timerOn])

  return (
    <div className="timer-container">
        <TimerDisplay tempo={formatarTempo()}/>
        <TimerControls 
        comecarTempo={() => setTimerOn(true)} 
        pararTempo={() => setTimerOn(false)}
        timerOn={timerOn}
        resetarTempo={resetarTempo}
        adicionarVolta={adicionarVolta}
        />
        <LapList voltas={Laps}/>
    </div>
  )
}

export default Timer