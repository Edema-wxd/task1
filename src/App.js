import Body from "./components/Body"
import Footer from "./components/Footer"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import NotFound from "./pages/404"

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={ <Body/>} />
                <Route path="*" element={ <NotFound/> } />
            </Routes>

            <Footer/>

        </Router>
    )
}

export default App