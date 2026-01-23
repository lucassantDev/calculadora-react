// import { useState } from 'react'
import ButtonNumber from './components/ButtonNumber'
import ButtonOperation from './components/ButtonOperation'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <main>
        <div className='result'>
          
        </div>
        <div className='buttons-div'>
          <ButtonNumber number={0} />
          <ButtonNumber number={1} />
          <ButtonNumber number={2} />
          <ButtonOperation operator={'+'} />
          <ButtonNumber number={3} />
          <ButtonNumber number={4} />
          <ButtonNumber number={5} />
          <ButtonOperation operator={'-'} />
          <ButtonNumber number={6} />
          <ButtonNumber number={7} />
          <ButtonNumber number={8} />
          <ButtonOperation operator={'x'} />
          <ButtonNumber number={9} />
      </div>
    </main>
    </>
  )
}

export default App
