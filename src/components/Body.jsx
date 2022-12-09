import slackimg from '../images/slack.svg'
import gitimg from "../images/github.svg"
import profileimg from "../images/profile.png"
import share from "../images/share.svg"
import {CopyToClipboard} from 'react-copy-to-clipboard'
import { Link } from "react-router-dom"

function Body() {
    return (
        <>
        <div className="profile">
            <CopyToClipboard text='https://task1-seven-chi.vercel.app/'>
                <button className='share'></button>
            </CopyToClipboard>
            <img src={profileimg} alt="" id="profile__img" className="proimg"/>
            <h1 id="twitter_">Francis.dev</h1>
            <h2 id="slack">FrancisWoods</h2>
        </div>


        <div className="link-arr">
            
        
        <a href="https://mobile.twitter.com/_edema_" className="btn" id="twitter">Twitter Link </a>

        <a href="https://training.zuri.team/" className="btn" id="btn__zuri" >Zuri Team <br /> <sub>Join the Zuri team</sub> </a>

        <a href="http://books.zuri.team"  className="btn" id="books">Zuri Books <br /> <sub>Zuri has complied a wide range of books on programing just for you </sub></a>

        <a href="https://books.zuri.team/python-for-beginners?ref_id=FrancisWoods" className="btn"  id="book_python">Python Books <br /> <sub>Eager to automate tasks using python, I have the perfect book for you</sub></a>

        <a href="https://background.zuri.team" className="btn"  id="pitch">Background Check for Coders <br /> <sub>Review your canidates before the interview stage with our background checks</sub></a>

        <a href="https://books.zuri.team/design-rules"  className="btn" id="book__design">Design Books <br /> <sub>Want to learn Design, click here for a free copy to get your journey started.</sub></a>  

        <Link to='/contact' className="btn" id="contact">Contact Me</Link>  


        </div>

        <div className="icons">
            <a href="/">
                <img src={ slackimg } alt="slack" className="gap" />
            </a>
            
            <a href="https://github.com/Edema-wxd">
                <img src={ gitimg } alt="Github" />
            </a>
        </div>

        </>
    )
}

export default Body
