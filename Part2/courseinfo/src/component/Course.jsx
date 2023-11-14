/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Header from "../subcomponents/Header";
import Content from "../subcomponents/Content";
const Course = ({course}) => {
    return (
      <div>
          <Header title={course[0].name} />
          <Content coursedata={course[0].parts}/>
          <Header title={course[1].name} />
          <Content coursedata={course[1].parts}/>
      </div>
    )
  }
  
  export default Course;
  