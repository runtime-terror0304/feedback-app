import FeedbackContext from "../context/FeedbackContext"
import {useContext} from 'react'

function FeedbackStats() {
    const {feedback} = useContext(FeedbackContext);

    //calculating rating average
    let average = feedback.reduce((acc, curr) => {
        return acc + curr.rating
    }, 0)/feedback.length

    average = average.toFixed(1);
    //make it only one decimal place.

  return (
    <div className="feedback-stats">
        <h4>{feedback.length} Review(s)</h4>
        <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

//no need of props when we are using context API
// FeedbackStats.propTypes = {
//     feedback: PropTypes.array.isRequired
// }

export default FeedbackStats