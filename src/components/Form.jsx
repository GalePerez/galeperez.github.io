import '../style/Form.css'

function Form() {
    return (
        <>
        <div className="form-container">
            <div className="form">
                <span className="heading">Get in touch</span>
                <h5>Name:</h5>
                <input  
                type="text" 
                className="input" 
                />
                <h5>Email:</h5>
                <input 
                    id="mail" type="email"
                    className="input" 
                />
                <h5>Message:</h5>
                <textarea 
                    rows="10" cols="30"
                    id="message" name="message"
                    className="textarea">
                </textarea>
                <div className="button-container">
                    <div className="send-button">Send</div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Form