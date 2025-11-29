import React from 'react'

const TimerControls = ({comecarTempo,pararTempo,timerOn,resetarTempo,adicionarVolta}) => {
  return (
    <div className='timer-controls'>
        {!timerOn && <button onClick={comecarTempo}>Iniciar</button>}
        {timerOn && <button onClick={pararTempo}>Parar</button>}
        {timerOn && <button onClick={adicionarVolta}>Marcar</button>}
        {timerOn &&<button onClick={resetarTempo}>Zerar</button>}
    </div>
  )
}

export default TimerControls