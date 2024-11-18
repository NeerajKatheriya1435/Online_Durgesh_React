import React, { useState } from 'react'


export default function TextBox(props) {

    const [text, setText] = useState('')
    const [email, setEmail] = useState([])

    const handleChange = (e) => {
        setText(e.target.value);
    }
    const handleUpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.handleAlert("Success", "Converted into uppercase")
    }
    const handleLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.handleAlert("Success", "Converted into lowecase")
    }
    const handleClearText = () => {
        setText('');
        props.handleAlert("Success", "Text Cleared")
    }

    const handleEmail = () => {
        const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
        const totalEmails = text.match(emailRegex);
        setEmail(totalEmails);
        props.handleAlert("success", "Email found")
    }
    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "));
        props.handleAlert("success", "Removed extra spaces")
    }
    const handleCopyText = () => {
        var text = document.getElementById('floatingTextarea2')
        text.select()
        navigator.clipboard.writeText(text.value);
        props.handleAlert("success", "Copied text")
    }
    return (
        <div>
            <div className={`bg-${props.style === 'light' ? 'light' : 'secondary'}`}>

                <h3 className={`my-4 text-center text-${props.style === 'light' ? 'black' : 'white'}`}>This is My TextArea Box Please Write Something</h3>
                <div className="container my-4">
                    <div className="form-floating">
                        <textarea className={`form-control bg-${props.style === 'light' ? 'light' : 'secondary'}`} style={{ color: props.style === 'light' ? 'black' : 'white', height: '200px' }} onChange={handleChange} value={text} placeholder="Leave a comment here" id="floatingTextarea2"></textarea>
                    </div>
                    <button onClick={handleUpperCase} className="btn btn-success my-2">Convert To UpperCase</button>
                    <button onClick={handleLowerCase} className="btn btn-success my-2 mx-2">Convert To LowerCase</button>
                    <button onClick={handleClearText} className="btn btn-success my-2 mx-2">Clear Text</button>
                    <button onClick={handleEmail} className="btn btn-success my-2 mx-2">Find Emails</button>
                    <button onClick={handleExtraSpace} className="btn btn-success my-2 mx-2">Remove Extra Space</button>
                    <button onClick={handleCopyText} className="btn btn-success my-2 mx-2">Copy Text</button>
                </div>
                <div className={`container text-${props.style === 'light' ? 'black' : 'white'}`}>
                    {email ? email.map((elem, index) => (<div key={index}>{elem}</div>)) : (<div>No Emails Found!</div>)}
                </div>
                <div className={`container text-${props.style === 'light' ? 'black' : 'white'}`}>
                    <h3 className="pageSummary">Page Summary</h3>
                    Total Words : {text.split(' ').length} <br />
                    Total Alphabets: {text.length} <br />
                    Total Time to Read: {text.split(' ').length / 2} seconds to read <br />
                    Page Summary : {text}
                </div>
            </div>
        </div>
    )
}
