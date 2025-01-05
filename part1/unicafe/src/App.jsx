import { useState } from 'react'

const Header = ({content}) => {
  return (
    <div>
      <h1>{content}</h1>
    </div>
  )
}

const Button = ({content, onClick}) => {
  return (
    <>
      <button onClick={onClick}>{content}</button>
    </>  
  )
}

const Display = ({content, votes}) => <div>{content} {votes}</div>

const handleButtonClickFactory = (currState, setState) => {
  // add 1 to the button current state
  return () => setState(currState+1)
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header content={'give feedback'}/>
      <Button content={'good'} onClick={handleButtonClickFactory(good, setGood)}/>
      <Button content={'neutral'} onClick={handleButtonClickFactory(neutral, setNeutral)}/>
      <Button content={'bad'} onClick={handleButtonClickFactory(bad, setBad)}/>
      
      <Header content={'statistics'}/>
      <Display content={'good'} votes={good}/>
      <Display content={'neutral'} votes={neutral}/>
      <Display content={'bad'} votes={bad}/>
    </div>
  )
}

export default App