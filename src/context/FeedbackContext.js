//Contexts are used to basically handle the global states efficiently so that we don't have to pass them and the function handling them like props in the different components which saves a lot of code and hardwork and confusion.

import {createContext, useState} from 'react';
import {useEffect} from 'react';

const FeedbackContext = createContext(); 

export const FeedbackProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true)
    const [feedback, setFeedback] = useState([])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    useEffect(()=>{
        fetchFeedback()
    }, [])

    //Fetch Feedback
    const fetchFeedback = async() => {
        console.log('hello')
        const response = await fetch('/feedback?_sort=id&_order=desc')
        const data = await response.json()

        setFeedback(data)
        setIsLoading(false)
    }

    const deleteFeedback = async function(id){
        if(window.confirm('Do you want to delete this feedback ?'))
        {
            await fetch(`/feedback/${id}`, {
                method: 'DELETE'
            })

            setFeedback(feedback.filter((item) => {
                return item.id !== id;
            }))
        }
    }

    const addFeedback = async (newFeedback) => {
        const response = await fetch('/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newFeedback)
        })

        const data = await response.json()
        
        setFeedback([data,...feedback]);
    }

    //function to update feedback item
    const updateFeedback = async (id, updItem) => {
        console.log(updItem)
        console.log(id)

        const response = await fetch(`/feedback/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updItem)
        })

        const data = await response.json();

        setFeedback(feedback.map((item) => item.id === id ? {...item, ...data} : item))
    }

    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    return <FeedbackContext.Provider value={{feedback, deleteFeedback, addFeedback, editFeedback, feedbackEdit, updateFeedback, setFeedbackEdit, isLoading}}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext