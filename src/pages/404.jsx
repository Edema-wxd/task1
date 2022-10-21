import back from "../images/back.svg"
import { Link } from "react-router-dom"

function NotFound() {
    return (
        <div className="errpage">
        <h6>404 error</h6>
        <h1 className="err">We can't find that page</h1>
        <p className="errtxt">Sorry, the page you are looking for doesn't exist</p>
        <div className="errbtns">
            <Link to="/">
                <button className="errbtn a">
                    <img src={back} alt="" />
                    <p>Go back</p>
                </button>
            </Link>

            <Link to="/">
                <button className="errbtn b">
                Take me home
                </button>
            </Link>
            
        </div>
        </div>
    );
}

export default NotFound