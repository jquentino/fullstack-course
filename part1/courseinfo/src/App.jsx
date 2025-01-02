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
        {props.name} {props.exercises}
      </p>
    </>
  )
}

const Content = ({ array_of_items }) => {
  return (
    <div>
      {array_of_items.map((item) => (
        <Part name={item.name} exercises={item.exercises}/>
      ))}
    </div>
  )
}

const Total = ({array_of_items}) => {
  let total = 0
  for (const item of array_of_items) {
    total += item.exercises
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
    {name: 'Fundamentals of React', exercises: 10},
    {name: 'Using props to pass data', exercises: 7},
    {name: 'State of a component', exercises: 14},
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