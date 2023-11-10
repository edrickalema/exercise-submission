/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const App = () => {

  const course = {
  course: 'Half Stack application development',
  parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
    
      {
        name: 'sing props to pass data',
        exercises: 7
      },
    
      {
        name: 'State of a component',
        exercises: 14
      }
  ]
  }


  const Header = ({course}) => {
    return <h1>{course}</h1>
  }

  const Content =({part}) => {
    return (
      <div>
        <p>{part[0].name} {part[0].exercises}</p>
        <p>{part[1].name} {part[1].exercises}</p>
        <p>{part[2].name} {part[2].exercises}</p>
      
      </div>
    )
  }

  const Total = ({part}) => {
    return (
      <p>{part[0].exercises + part[1].exercises + part[2].exercises}</p>
    )
  }

  return (
   <div>
     <Header course={course.course} />

     <Content part={course.parts}/>

     <Total part={course.parts} />
   </div>
  )
}

export default App
