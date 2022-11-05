
function Contact() {
    return (
        <div className="contact">
            <h2>Contact Me</h2>
            <p className="ctxt">Hi there, contact me to ask me about anything you have in mind.</p>

            <form>
                <div className="cont name">
                    <div className="c">
                        <label htmlFor="first_name">First Name</label>
                        <input className="in"  type="text" name="First Name" id="first_name" placeholder="Enter your first name" required/>
                    </div>

                    <div className="d">
                        <label htmlFor="last_name">Last Name</label>
                        <input  className="in" type="text" name="Last Name" id="last_name" placeholder="Enter your last name" required/>
                    </div>
                </div>

                <label htmlFor="email">Email</label>
                <input  className="in" type="email" name="email" id="email" placeholder="yourname@email.com" required/>


                <label htmlFor="message">Message</label>
                <textarea className="conta txtbxt" name="message" id="message" wrap="soft" placeholder="Send me a message and I'll reply you as soon as possible..." spellCheck required ></textarea>

                <br />
                <div className="chk">

                    <label class="control control-checkbox">
                        You agree to providing your data to Francis who may contact you.
                            <input type="checkbox" name="consent" id="consent" requiredchecked="checked" />
                        <div class="control_indicator"></div>
                    </label>
                
                </div>
                

                <button className="ctn" id="btn__submit" type="submit">Send Message</button>

            </form>
        </div>
    )
}

export default Contact