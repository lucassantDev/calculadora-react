// import { useState } from 'react'
import ButtonNumber from './components/ButtonNumber'
import ButtonOperation from './components/ButtonOperation'

function App() {
 
  function numberConsole(valueButton){
    console.log(valueButton)
  }

  function plusOperator(){

  }

  return (
    <>
    <main>
        <div className='result'>
          
        </div>
        <div className='buttons-div'>
          <button className="button-number" onClick={() => numberConsole(0)}>0</button>
          <button className="button-number" onClick={() => numberConsole(1)}>1</button>
          <button className="button-number" onClick={() => numberConsole(2)}>2</button>
          <button className="button-number" onClick={() => numberConsole(3)}>3</button>
          <button className="button-number" onClick={() => numberConsole(4)}>4</button>
          <button className="button-number" onClick={() => numberConsole(5)}>5</button>
          <button className="button-number" onClick={() => numberConsole(6)}>6</button>
          <button className="button-number" onClick={() => numberConsole(7)}>7</button>
          <button className="button-number" onClick={() => numberConsole(8)}>8</button>
          <button className="button-number" onClick={() => numberConsole(9)}>9</button>
      </div>
    </main>
    </>
  )
}

export default App
