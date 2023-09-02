import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = ()=>{
    // console.log('Uppercase was clicked'  + text);
    let newText = text.toUpperCase();
    setText (newText)
  }
  
  const handleLoClick = ()=>{
    // console.log('Lowercase was clicked'  + text);
    let newText = text.toLowerCase();
    setText (newText)
  }

  const handleCopyClick = ()=>{
    var text = document.getElementById('myBox')
    text.select()
    navigator.clipboard.writeText(text.value)
  }

  const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "))
  }

  const handleClClick = ()=>{
    // console.log('Lowercase was clicked'  + text);
    let newText = '';
    setText (newText)
  }

  const handleOnchange = (event)=>{
    // console.log('On change');
    setText(event.target.value);
  }

    const [text, setText] = useState('');

  // text = 'new text';
  // setText ('new text';)
  return (
    <>
    <div className="container" style={{color: props.mode === 'dark'?'white':'#021942'}}>    
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" style={{backgroundColor: props.mode === 'dark'?'#424242':'white',color: props.mode === 'dark'?'white':'#021942'}} value={text} id="myBox" onChange={handleOnchange} rows="8"></textarea>
        </div>
        <div className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</div>
        <div className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</div>
        <div className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</div>
        <div className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy Text</div>
        <div className="btn btn-primary mx-1" onClick={handleClClick}>Clear Text</div>
    </div>
    <div className="container my-3" style={{color: props.mode === 'dark'?'white':'#021942'}}>
      <h2>Your text summary</h2>
      <p><b> {text.split(".").length} </b> sentences, <b> {text.split(" ").length} </b> words, <b> {text.length} </b> characters and <b> {text.split(" ").length - 1} </b> Spaces </p>
      <p></p>
      <p><b> {0.008 * text.split(" ").length} </b> minites read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text: "Write something in the textbox above to preview it"}</p>
    </div>
    </>
  )
}
