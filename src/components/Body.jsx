import Button from "../shared/Button"
import slackimg from '../images/slack.svg'
import gitimg from "../images/github.svg"
import profileimg from "../images/profile.png"

function Body() {
    return (
        <>
        <div className="profile">
            <img src={profileimg} alt="" id="profile_img" className="proimg"/>
            <h1 id="twitter">Francis.dev</h1>
            <h2 id="slack">WoodsFrancis</h2>
        </div>


        <div className="link-arr">
            
        
        <a href="https://mobile.twitter.com/_edema_  " id=""><Button>Twitter Link</Button></a>

        <a href="https://training.zuri.team/" id="btn_zuri"><Button>Zuri Team</Button></a>

        <a href="http://books.zuri.team" id="books"><Button>Zuri Books</Button></a>

        <a href="https://books.zuri.team/python-for-beginners?ref_id=<FrancisWoods>" id="book_python"><Button>Python Books</Button></a>

        <a href="https://background.zuri.team" id="pitch"><Button>Background Check for Coders</Button></a>

        <a href="https://books.zuri.team/design-rules" id="book_design"><Button>Design Books</Button></a>  

        </div>

        <div className="icons">
            <a href="/">
                <img src={ slackimg } alt="slack" className="gap" />
            </a>
            
            <a href="/">
                <img src={ gitimg } alt="Github" />
            </a>
        </div>

        </>
    )
}

export default Body