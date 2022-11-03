import Body from "./components/Body"
import Footer from "./components/Footer"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import NotFound from "./pages/404"
import Contact from "./components/Contact"

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={ <Body/>} />
                <Route path="*" element={ <NotFound/> } />
                <Route exact path="/contact" element={ <Contact/> } />
            </Routes>

            <Footer/>

        </Router>
    )
}

export default App