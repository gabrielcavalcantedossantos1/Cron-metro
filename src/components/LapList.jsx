import React from 'react'

const LapList = ({voltas}) => {
  return (
    <div className="timer-laps">
  {voltas.length > 0 && 
    <div className="laps-box">
      <h3>Tempo(s):</h3>

      <ul>
        {voltas.map((marca, index) => (
          <li key={index}>Tempo {index+1}: {marca}</li>
        ))}
      </ul>
    </div>
  }
</div>

  )
}

export default LapList