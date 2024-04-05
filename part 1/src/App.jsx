const App = () => {
  const course = "Half Stack Application development"
  const part1 = "Fundamentals of React"
  const exercises1 = 10
  const part2 = "Using Props to pass data"
  const exercises2 = 7
  const part3 = "State of a component"
  const exercises3 = 14

return (
  <div>
    <Header course={course}/>
    <p>    
    <Content part={part1} exercises={exercises1} />
    <br/>
    <Content part={part2} exercises={exercises2} />
    <br/>
    <Content part={part3} exercises={exercises3} />
    </p>

    <Total exercises={exercises1 + exercises2 + exercises3}/>    
    
  </div>
)
}

const Header = (props) => {
  console.log("Header is showing")

  return (
    <div>
      {props.course}
    </div>
  )
}

const Content = (props) => {
  console.log("Content is showing")

  return (
    <>
      {props.part} {props.exercises}
    </>
  )
}

const Total = (props) => {
  console.log("The total exercises is showing")

  return (
    <>
      <p>Number of exercises {props.exercises}</p>
    </>
  )
}


export default App
