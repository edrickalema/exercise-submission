/* eslint-disable react/prop-types */
const Content = ({coursedata}) => {
    const courseInfo = coursedata.map((data) => {
      const {name, exercises, id} = data;
      return <p key={id}>{name} {exercises}</p>
    });
  
  const totalExercise = Object.values(coursedata).reduce((a, b) => {
    return a + b.exercises;
  }, 0);
  
  
    return (
      <div>
        {courseInfo}
        <h2>Total Exercises: {totalExercise}</h2>
      </div>
    )
  }
  
export default Content;  