
function Contact() {
    return (
        <div className="contact">
            <h2>Contact Me</h2>
            <p>Hi there, contact me to ask me about anything you have in mind.</p>

            <form>
                <div className="cont name">
                    <div className="c">
                        <label htmlFor="first_name">First Name</label>
                        <br />
                        <input className="in"  type="text" name="First Name" id="first_name" placeholder="Enter your first name"/>
                    </div>

                    <div className="d">
                        <label htmlFor="last_name">Last Name</label>
                        <br />
                        <input  className="in" type="text" name="Last Name" id="last_name" placeholder="Enter your last name" />
                    </div>
                </div>

                <label htmlFor="email">Email</label>
                <br />
                <input  className="in" type="email" name="email" id="email" placeholder="yourname@email.com"/>

                <br/>

                <label htmlFor="message">Message</label>
                <br />
                <textarea className="txtbxt conta" name="message" id="message" cols="30" rows="10" placeholder="Send me a message and I'll reply you as soon as possible..."></textarea>
                <br/>
                <input type="checkbox" name="consent" id="consent" />
                <p>You agree to providing your data to Francis who may contact you.</p>

                <button className="ctn" id="btn__submit" type="submit">Send Message</button>

            </form>
        </div>
    )
}

export default Contact