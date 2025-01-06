import { useState } from 'react'


const Header = ({ text }) => <h1>{text}</h1>

const Button = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>
}

const Anecdote = ({ title, content, votes }) => {
  return (
    <div>
      <Header text={title}/>
      <div>{content}</div>
      <p>has {votes} votes</p>
    </div>
  )
}

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max)
}

const handleNextBtnClick = (maxIndex, setStateFunc) => {
  const resultFunc = () => {
    console.log('next btn clicked')
    const index = getRandomInt(maxIndex)
    console.log('selected_index', index)
    setStateFunc(index)
  }
  return resultFunc 
}

const handleVoteBtnClick = ( 
  anecdoteIndex, pointsArray, setStateFunc
) => {
  const resultVoteFunc = () => {
    const pointsArrayCopy = [...pointsArray]
    pointsArrayCopy[anecdoteIndex] += 1
    setStateFunc(pointsArrayCopy)
  }
  return resultVoteFunc
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const lenAnecdotes = anecdotes.length
  const initialPointsArray = Array(lenAnecdotes).fill(0)
  const [pointsArray, setPointsArray] = useState(initialPointsArray)
  const mostVotedIndex = pointsArray.reduce(
    (maxIdx, value, idx, array) => value > array[maxIdx] ? idx : maxIdx, 0
  )
  
  return (
    <div>
      <Anecdote
        title={'Anecdote of the day'}
        content={anecdotes[selected]}
        votes={pointsArray[selected]}
      />
      <div>
        <Button
          text={'vote'}
          onClick={handleVoteBtnClick(selected, pointsArray, setPointsArray)}
        />
        <Button
          text={'next anecdote'}
          onClick={handleNextBtnClick(lenAnecdotes, setSelected)}
        />
      </div>
      <Anecdote
        title={'Anecdote with most votes'}
        content={anecdotes[mostVotedIndex]}
        votes={pointsArray[mostVotedIndex]}
      />
    </div>
  )
}

export default App