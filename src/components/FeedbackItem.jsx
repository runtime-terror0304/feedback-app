import { useState } from "react"
import PropTypes from 'prop-types'
import {FaTimes} from 'react-icons/fa';
import Card from "./shared/Card"

function FeedbackItem({item, handleDelete}) {
  //this is the way how we use state hooks and [what we want to call it, the function to set it's value] = useState(default value of the state);
  //State ek hook hota hai jissmei hum koi value store kr skte hai...aur yeh iss component specific hai so yeh component hook hai...humare pass global hooks bhi hoti which can be accessed across different componenets.
  
  //states in react are immutable which means they can't be reassigned/changed directly...it has to reset!...so that is exactly why we use setRating type of functions to set the values...we can also pass function in the setRating or any set function and usske argument mei kuch dal do, that will give us preivous value of the state variable.

  const [rating, setRating] = useState(item.rating)
  const [text, setText] = useState(item.text)

  return (
    <Card>
        {/* yeh children ki tarah jayenge card wale componenet k andr. */}
        <div className="num-display">{rating}</div>
        <button className="close" onClick={() => handleDelete(item.id)}>
            <FaTimes color={'purple'} />
        </button>
        <div className="text-display">{text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired
}

export default FeedbackItem