/* eslint-disable react/prop-types */
/* eslint-disable no-const-assign */
/* eslint-disable no-unused-vars */
import { useState } from "react"

// Button Components for Buttons
const Button = ({label, event}) => {
  return <button onClick={event}>{label}</button>
}
// Statistics Content
const Statisticsline = ({label, value}) => {
    return <p>{label} {value}</p>
}

// App Statistics
const Statistics = ({good, bad, neutral, average, total, percentPositive}) => {

  // Display statistics if feedbacks are  not zero
  if (good !=0 || bad !=0 || neutral !=0) {
    return (
        <div>
          <h1>Statistics</h1>
            <table>
              <tbody>
              <tr>
                <Statisticsline label="Good" value={good}/>
              </tr>
              <tr>
                <Statisticsline label="Neutral" value={neutral}/>
              </tr>
              <tr>
                <Statisticsline label="Bad" value={bad}/>
              </tr>
              <tr>
                <Statisticsline label="all" value={total}/>
              </tr>
              <tr>
                <Statisticsline label="average" value={average}/>
              </tr>
              <tr>
                <th>positive</th>
                <td>
                  {percentPositive} %
                </td>
              </tr>
              </tbody>
            </table>
        </div>
    )
  } else {
    return(
      <>
        <h1>Statistics</h1>
        <p>No statistics available</p>
      </>
    )
  }
 
}


const App = () => {

  // save the clicks of each feedback
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

// Event Handlers for each Button clicks
 const handleGoodClick = () => {
    setGood((prev) => prev += 1)
 }
 const handleNeutralClick = () => {
  setNeutral((prev) => prev += 1)
 }
 const handleBadClick = () => {
  setBad((prev) => prev +=1)
 }

//  Finding Average feedbacks
const average = ((good+neutral+bad)/3).toFixed(2)
const total = good + bad + neutral

// Finds the highest number in the feedbacks and then its percentage
const feedBacks = [good, neutral, bad].sort((a,b) => b-a);

const percentPositive = ((Number(feedBacks[0])/ total) * 100).toFixed(1)

  return (
    <>
      <h1>Give Feedback</h1>
        <Button event={handleGoodClick} label='good' />
        <Button event={handleNeutralClick} label='neutral' />
        <Button event={handleBadClick} label='bad' />
      <div>
       <Statistics
        neutral={neutral}
        good={good}
        bad={bad}
        average={average}
        percentPositive={percentPositive}
        total={total}
        />
      </div>
    </>
  )
}

export default App
