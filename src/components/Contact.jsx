import { useState } from "react"


function Contact() {
    const [check, setCheck] = useState(true)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [fnText, setFNText] = useState('')
    const [lnText, setLNText] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const [errfnText, seterrFNText] = useState('')
    const [errlnText, seterrLNText] = useState('')
    const [erremail, seterrEmail] = useState('')
    const [errmessage, seterrMessage] = useState('')

    const handleCheck = (e) =>{
        if ( check === true){
            setBtnDisabled(false)
        } else{
            setBtnDisabled(false)
        }

        setCheck(false)
    }

    const handleFNChange = (a) =>{
        if ( fnText === ''){
            seterrFNText(null)
        } else if (fnText !== '' && fnText.trim().length <= 5) {
            seterrFNText('Please type your first name')
            
        } else{
            seterrFNText(null)
        }
        setFNText(a.target.value)
    }
    const handleLNChange = (a) =>{
        if ( lnText === ''){

        } else if (lnText !== '' && lnText.trim().length <= 5) {
            seterrLNText('Please type your last name')
        } else{
            seterrLNText(null)
        }
        setLNText(a.target.value)
    }
    const handleEmailChange = (a) =>{
        const regex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

        if ( email === ''){
            seterrEmail(null)
        } else if (email !== '' && (email.trim().length <= 5 || regex.test(email) === false) ) {
            seterrEmail('Enter a valid email')
        } else{
            seterrEmail(null)
        }
        setEmail(a.target.value)
    }
    const handleMessageChange = (a) =>{
        if ( message === ''){
            seterrMessage(null)
        } else if (message !== '' && message.trim().length <= 5) {
            seterrMessage('Please enter a message')
            
        } else{
            seterrMessage(null)
        }
        setMessage(a.target.value)
    }



    return (
        <div className="contact">
            <h2>Contact Me</h2>
            <p className="ctxt">Hi there, contact me to ask me about anything you have in mind.</p>

            <form>
                <div className="cont name">
                    <div className="c">
                        <label htmlFor="first_name">First Name</label>
                        <input onChange={handleFNChange} className="in" value={fnText}  type="text" name="First Name" id="first_name" placeholder="Enter your first name" required/>
                        {errfnText && <div className="errmsg">{errfnText} </div>}
                    </div>

                    <div className="d">
                        <label htmlFor="last_name">Last Name</label>
                        <input onChange={handleLNChange}  className="in" value={lnText} type="text" name="Last Name" id="last_name" placeholder="Enter your last name" required/>
                        {errlnText && <div className="errmsg">{errlnText} </div>}
                    </div>
                </div>

                <label htmlFor="email">Email</label>
                <input onChange={handleEmailChange}  className="in" value={email}type="email" name="email" id="email" placeholder="yourname@email.com" required/>
                {erremail && <div className="errmsg">{erremail} </div>}


                <label htmlFor="message">Message</label>
                <textarea onChange={handleMessageChange}  className="conta txtbxt" value={message} name="message" id="message" wrap="soft" placeholder="Send me a message and I'll reply you as soon as possible..." spellCheck required ></textarea>
                {errmessage && <div className="errmsg">{errmessage} </div>}

                <br />
                <div className="chk">

                    <label className="control control-checkbox">
                        You agree to providing your data to Francis who may contact you.
                            <input onChange={handleCheck} type="checkbox" name="consent" id="consent" required checked="checked" value={check} />
                        <div className="control_indicator"></div>
                    </label>
                
                </div>
                

                <button disabled={btnDisabled} className="ctn" id="btn__submit" type="submit">Send Message</button>

            </form>
        </div>
    )
}

export default Contact