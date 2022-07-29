import { useState, useEffect } from "react"
import Card from "./shared/Card"
import Button from "./shared/Button"
import RatingSelect from "./RatingSelect"
import {useContext} from 'react'
import FeedbackContext from "../context/FeedbackContext"

function FeedbackForm() {
    const [text, setText] = useState('');
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState('');
    const [rating, setRating] = useState(10);

    const {addFeedback, feedbackEdit, updateFeedback, setFeedbackEdit} = useContext(FeedbackContext);

    //we want ki jab mei edit wale button pe click karu, and we know jab mei karunga toh feedbackEdit state mei change hoga kuch...tab I want ki form mei uss particular item ka data aa jaye...ussey kehtey effect or side-effect...useEffect ko function ki tarh call krte and usmei callback dete aur doosra argument mei array of dependencies dete jinnmei change honne pe call back run hota...otherwise agr kuch na dei array mei toh it runs everytime component loads.
    useEffect(() => {
        if(feedbackEdit.edit === true)
        {
            setBtnDisabled(false);
            setText(feedbackEdit.item.text);
            setRating(feedbackEdit.item.rating)
        }
    }, [feedbackEdit])

    // yeh function setup kiya hai ki jab input field mei kuch change aye toh ussko text ki state mei reflect kro..nothing special
    const handleTextChange = (e) => {
        if(text === '')
        {
            setBtnDisabled(true);
            setMessage(null);
        }else if(text !== '' && text.trim().length <= 10){
            setBtnDisabled(true);
            setMessage('Text must be atleast 10 characters!');
        }
        else{
            setBtnDisabled(false);
            setMessage(null);
        }
        //yeh uppr logic hai validation ka ki agar mere paas text state mei kuch nahi hai toh button disabled rahega, agar <= 10 characters hai tab message ayega aur button disabled rahega.

        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(text.trim().length > 10)
        {
            const newFeedback = {
                text,
                rating
            }

            if(feedbackEdit.edit === true)
            {
                updateFeedback(feedbackEdit.item.id, newFeedback)
            }
            else{
                addFeedback(newFeedback);
            }

            setText('');
            setFeedbackEdit({item: {}, edit: false});
        }
    }

  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>
                How would you rate your service with us ?
            </h2>
            
            <RatingSelect select={(rating) => setRating(rating)}/>

            <div className="input-group">
                <input onChange={handleTextChange} type="text" placeholder="Write a review" value={text}/>
                <Button type={"submit"} isDisabled={btnDisabled}>Send</Button>
            </div>

            {message && <div className="message">{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm