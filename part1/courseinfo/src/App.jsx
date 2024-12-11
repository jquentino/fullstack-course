const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Part = (props) => {
  return (
    <>
      <p>
        {props.part_num} {props.number_of_exercises}
      </p>
    </>
  )
}

const Content = ({ array_of_items }) => {
  return (
    <div>
      {array_of_items.map((item) => (
        <Part part_num={item.part} number_of_exercises={item.number_of_exercises}/>
      ))}
    </div>
  )
}

const Total = ({array_of_items}) => {
  let total = 0
  for (const item of array_of_items) {
    total += item.number_of_exercises
  }
  return (
    <>
      <p>Number of exercises {total} </p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const items = [
    {part: 'Fundamentals of React', number_of_exercises: 10},
    {part: 'Using props to pass data', number_of_exercises: 7},
    {part: 'State of a component', number_of_exercises: 14},
  ]

  return (
    <div>
      <Header course={course}/>
      <Content array_of_items={items} />
      <Total array_of_items={items}/>
    </div>
  )
}

export default App