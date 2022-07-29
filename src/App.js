// there is a BrowserRouter or HashRouter.
//BrowserRouter uses the HTML5 history API to keep the user in sync with the URL.
//HashRouter uses hash portion of the URL to keep it in sync.
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackData from "./data/FeedbackData."
import FeedbackForm from "./components/FeedbackForm"
import AboutPage from "./pages/AboutPage"
import AboutIconLink from './components/AboutIconLink';
import {FeedbackProvider} from './context/FeedbackContext'

function App(){
        return (
        <FeedbackProvider>
        <Router>
            <Header />
            <div className="container">
                <Routes>
                    <Route exact path='/' element={
                        <>
                            <FeedbackForm/>
                            <FeedbackStats />
                            <FeedbackList />
                        </>
                    }>
                    </Route>

                    <Route path='/about' element={<AboutPage />} />
                </Routes>

                <AboutIconLink />
            </div>
        </Router>
        </FeedbackProvider>
    )
}

export default App