import FeedbackItem from "./FeedbackItem"
import PropTypes from "prop-types"
import {motion, AnimatePresence, animate} from 'framer-motion'

function FeedbackList({feedback, handleDelete}) {
    if(!feedback || feedback.length === 0)
    {
        return(
            <p>There is no feedback yet!</p>
        )
    }

    return (
        <div className="feedback-list">
            <AnimatePresence>
            {feedback.map((item) => {
                return (
                    <motion.div key={item.id} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
                        <FeedbackItem key={item.id} item={item} handleDelete={handleDelete}/>
                    </motion.div>
                )
            })}
            </AnimatePresence>
        </div>

    // return (
    // <div className="feedback-list">
    //     {feedback.map((item) => {
    //         return (
    //             <FeedbackItem key={item.id} item={item} handleDelete={handleDelete}/>
    //         )
    //     })}
    // </div>
  )
}

//this is how we can set the type of the prop to some array of objects along with defining the shape of the object.
FeedbackList.propTypes = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired,    
            text: PropTypes.string.isRequired,
        })
    )
}

export default FeedbackList