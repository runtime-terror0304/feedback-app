import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import {useState} from "react";
import FeedbackStats from "./components/FeedbackStats"
import FeedbackData from "./data/FeedbackData."
import FeedbackForm from "./components/FeedbackForm"
import {v4 as uuidv4} from  'uuid'

function App(){
        const [feedback, setFeedback] = useState(FeedbackData)  

        const deleteFeedback = function(id){
            if(window.confirm('Do you want to delete this feedback ?'))
            {
                setFeedback(feedback.filter((item) => {
                    return item.id !== id;
                }))
            }
        }

        const addFeedback = (newFeedback) => {
            newFeedback.id = uuidv4()
            setFeedback([newFeedback,...feedback]);
        }

        return (
        <>
            <Header />
            <div className="container">
                <FeedbackForm handleAdd={addFeedback}/>
                <FeedbackStats feedback = {feedback} />
                <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
            </div>
        </>
    )
}

export default App