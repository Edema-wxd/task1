
function Contact() {
    return (
        <form>
            <h2>Contact Me</h2>
            <p>Hi there, contact me to ask me about anything you have in mind.</p>
            <label htmlFor="first_name">First Name</label>
            <br />
            <input type="text" name="First Name" id="first_name" />

            <label htmlFor="last_name">Last Name</label>
            <br />
            <input type="text" name="Last Name" id="last_name" />

            <label htmlFor="email">Email</label>
            <br />
            <input type="email" name="email" id="email" />

            <label htmlFor="message">Message</label>
            <br />
            <textarea name="message" id="message" cols="30" rows="10"></textarea>

            <input type="checkbox" name="consent" id="consent" />
            <p>You agree to providing your data to Francis who may contact you.</p>

            <button id="btn__submit" type="submit">Send Message</button>



        </form>
    )
}

export default Contact