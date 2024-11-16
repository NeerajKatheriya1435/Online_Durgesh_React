import React, { useState } from 'react'

const TextArea = (props) => {

    const [text, setText] = useState('')
    const [email, setEmail] = useState([])

    const handleChange = (e) => {
        setText(e.target.value);
    }
    const handleUpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearText = () => {
        setText('');
    }

    const handleEmail = () => {
        const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
        const totalEmails = text.match(emailRegex);
        setEmail(totalEmails);
    }
    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "));
    }
    const handleCopyText = () => {
        // let seletedText = document.getElementById('floatingTextarea2').value
        // navigator.clipboard.writeText(seletedText);

        var text = document.getElementById('floatingTextarea2')
        text.select()
        navigator.clipboard.writeText(text.value);
    }
    return (
        <div>
            <div className={`bg-${props.style === 'light' ? 'light' : 'secondary'}`}>

                <h3 className={`my-4 text-center text-${props.style === 'light' ? 'dark' : 'light'}`}>This is My TextArea Box Please Write Something</h3>
                <div div className="container my-4">
                    <div className="form-floating">
                        <textarea className={`form-control bg-${props.style === 'light' ? 'light' : 'secondary'}`} style={{ color: props.style === 'light' ? 'black' : 'white', height: '20vh' }} onChange={handleChange} value={text} placeholder="Leave a comment here" id="floatingTextarea2"></textarea>
                    </div>
                    <button onClick={handleUpperCase} className="btn btn-success my-2">Convert To UpperCase</button>
                    <button onClick={handleLowerCase} className="btn btn-success my-2 mx-2">Convert To LowerCase</button>
                    <button onClick={handleClearText} className="btn btn-success my-2 mx-2">Clear Text</button>
                    <button onClick={handleEmail} className="btn btn-success my-2 mx-2">Find Emails</button>
                    <button onClick={handleExtraSpace} className="btn btn-success my-2 mx-2">Remove Extra Space</button>
                    <button onClick={handleCopyText} className="btn btn-success my-2 mx-2">Copy Text</button>
                </div>
                {/* <Navbar menuComp1={menuItem1} menuComp2={menuItem2} /> */}
                <div className={`container text-${props.style === 'light' ? 'dark' : 'light'}`}>
                    {email ? email.map((elem, index) => (<div key={index}>{elem}</div>)) : (<div>No Emails Found!</div>)}
                </div>
                <div className={`container text-${props.style === 'light' ? 'dark' : 'light'}`}>
                    <h3 className="pageSummary">Page Summary</h3>
                    Total Words : {text.split(' ').length} <br />
                    Total Alphabets: {text.length} <br />
                    Total Time to Read: {text.split(' ').length / 2} seconds to read <br />
                    Page Summary : {text}
                </div>
            </div >
        </div>
    )
}

export default TextArea