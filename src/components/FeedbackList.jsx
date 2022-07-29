import FeedbackItem from "./FeedbackItem"
import {motion, AnimatePresence, animate} from 'framer-motion'
import {useContext} from 'react'
import FeedbackContext from "../context/FeedbackContext"
import Spinner from "./shared/Spinner"

function FeedbackList() {
    const {feedback, isLoading} = useContext(FeedbackContext);

    if(!isLoading && (!feedback || feedback.length === 0))
    {
        return(
            <p>There is no feedback yet!</p>
        )
    }

    return isLoading ? < Spinner /> : ( 
        <div className="feedback-list">
        <AnimatePresence>
        {feedback.map((item) => {
            return (
                <motion.div key={item.id} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
                    <FeedbackItem key={item.id} item={item} />
                </motion.div>
            )
        })}
        </AnimatePresence>
        </div>
    )

    //the version without the animation
    // return (
    // <div className="feedback-list">
    //     {feedback.map((item) => {
    //         return (
    //             <FeedbackItem key={item.id} item={item} handleDelete={handleDelete}/>
    //         )
    //     })}
    // </div>
}

//this is how we can set the type of the prop to some array of objects along with defining the shape of the object.
//no need of this when we use the context API and don't pass the information as props in the components.
// FeedbackList.propTypes = {
//     feedback: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.number.isRequired,
//             rating: PropTypes.number.isRequired,    
//             text: PropTypes.string.isRequired,
//         })
//     )
// }

export default FeedbackList