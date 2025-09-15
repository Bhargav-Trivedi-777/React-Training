import React, { useState } from 'react'

export default function TextForm(prop) {
    const [text, setText] = useState("");
    const [find, setFind] = useState("");
    const [repalce, setReplace] = useState("");

    const HandleOnChange = (event) => {
        setText(event.target.value)
    }
    const HandleUpKey = () => {
        console.log("Upper Case btn clicked")
        let newText = text.toUpperCase();
        setText(newText)
        prop.showAlert("Converted to Uppercase", "success")
    }
    const HandleLoKey = () => {
        console.log("Lower Case btn clicked")
        let newText = text.toLowerCase();
        setText(newText);
        prop.showAlert("Converted to Lowercase", "success")
    }
    const ClaerText = () => {
        if(text ===""){
            prop.showAlert("Text box already empty", "danger");
            return;
        }
        setText("");
        prop.showAlert("Text Clered", "warning")
    }
    const CopyToClipboard = () => {
        console.log("CopyToClipboard")
        if (typeof navigator.clipboard?.writeText === "function") {
            prop.showAlert("Text coied to clipboard", "primary")
            return navigator.clipboard.writeText(text);
        }
    }

    const LongWord = function () {
        let words = text.split(" ")
        let big = null
        words.forEach(item => {
            big = (big == null || big.length < item.length) ? item : big;
        })
        prop.showAlert("Longest word is : " + big , "primary")
    }
    const Speak = () => {
        const utterance = new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(utterance);
    };
    const FindAndReplace = () => {
        let newText = text.split(find).join(repalce)
        setText(newText)
        alert(find + " replaced with " + repalce);
    }

    return (
        <>
            <div className={`container ${prop.darkMode ? "dark" : "light"}-mode`} >
                <div className='container'>
                    <h1>{prop.heading}</h1>
                    <div className="mb-3">
                        <textarea className="form-control" id="myBox" onChange={HandleOnChange} value={text} rows="8"
                            style={{
                                backgroundColor: prop.darkMode ? "#b5888870" : "#8cd2dd44",
                                color: prop.darkMode ? "white" : "black"
                            }} />
                    </div>
                    <div className="btn btn-primary mx-1" onClick={HandleUpKey}>Convert to Uppercase</div>
                    <div className="btn btn-primary mx-1 " onClick={HandleLoKey}>Convert to Lowecase</div>
                    <div className="btn btn-primary mx-1 " onClick={LongWord}>Longest Word Length</div>
                    <div className="btn btn-primary mx-1 " onClick={Speak}>Speak</div>
                    <div className="btn btn-success mx-1 " onClick={CopyToClipboard}>Copy</div>
                    <div className="btn btn-warning mx-1 " onClick={ClaerText}>Clear</div>
                </div>
                <div className='container my-3'>
                    <h2 className='my-3'>Your Text Summary</h2>
                    <p> {text === "" ? 0 : text.split(" ").length} words and {text.length} characters</p>
                    <p> {text === "" ? 0 : 0.008 * text.split(" ").length } Minutes read</p>
                    <h2 className='my-3'>Preview</h2>
                    <p>{text}</p>
                </div>
                <div className="container my-3">
                    <h2>Find and Replace</h2>
                    <div className="mb-3">
                        <h4>Find</h4>
                        <input type="text" name="find" id="findBox" onChange={(e) => setFind(e.target.value)} value={find} 
                        style={{
                                backgroundColor: prop.darkMode ? "#b5888870" : "#8cd2dd44",
                                color: prop.darkMode ? "white" : "black"
                            }} />
                    </div>
                    <div className="mb-3">
                        <h4>Replace</h4>
                        <input type="text" name="replace" id="replaceBox" onChange={(e) => setReplace(e.target.value)} value={repalce} 
                        style={{
                                backgroundColor: prop.darkMode ? "#b5888870" : "#8cd2dd44",
                                color: prop.darkMode ? "white" : "black"
                        }} />
                    </div>
                    <div className="btn btn-primary mx-1" onClick={FindAndReplace} >Find and replace</div>
                </div>
            </div>
        </>
    )
}
