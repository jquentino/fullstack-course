import { useState } from 'react'

const Header = ({ content }) => {
  return (
    <div>
      <h1>{content}</h1>
    </div>
  )
}

const Button = ({ content, onClick }) => {
  return (
    <>
      <button onClick={onClick}>{content}</button>
    </>
  )
}

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({ good, bad, neutral }) => {
  const total = good + neutral + bad
  let avg = 0
  let positivePercent = 0
  if (total != 0) {
    avg = (good - bad) / total
    positivePercent = good / total * 100
    return (
      <div>
        <table>
          <tbody>
            <StatisticLine text={'good'} value={good} />
            <StatisticLine text={'neutral'} value={neutral} />
            <StatisticLine text={'bad'} value={bad} />
            <StatisticLine text={'all'} value={total} />
            <StatisticLine text={'average'} value={avg} />
            <StatisticLine text={'positive'} value={positivePercent + '%'} />
          </tbody>
        </table>
      </div>
    )
  }
  else {
    return <div>No feedback given</div>
  }
}

const handleButtonClickFactory = (currState, setState) => {
  // add 1 to the button current state
  return () => setState(currState + 1)
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header content={'give feedback'} />
      <Button content={'good'} onClick={handleButtonClickFactory(good, setGood)} />
      <Button content={'neutral'} onClick={handleButtonClickFactory(neutral, setNeutral)} />
      <Button content={'bad'} onClick={handleButtonClickFactory(bad, setBad)} />
      
      <Header content={'statistics'} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App