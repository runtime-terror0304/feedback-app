//Contexts are used to basically handle the global states efficiently so that we don't have to pass them and the function handling them like props in the different components which saves a lot of code and hardwork and confusion.

import {createContext, useState} from 'react';
import {v4 as uuidv4} from 'uuid'

const FeedbackContext = createContext(); 

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This is feedback item 1', 
            rating: 10,
        },
        {
            id: 2,
            text: 'This is feedback item 2', 
            rating: 9,
        },
        {
            id: 3,
            text: 'This is feedback item 3', 
            rating: 7,
        }
    ])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

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

    //function to update feedback item
    const updateFeedback = (id, updItem) => {
        console.log(updItem)
        console.log(id)
        setFeedback(feedback.map((item) => item.id === id ? {...item, ...updItem} : item))
    }

    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    return <FeedbackContext.Provider value={{feedback, deleteFeedback, addFeedback, editFeedback, feedbackEdit, updateFeedback, setFeedbackEdit}}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext