import React, {useState} from 'react'

export default function TextForm(props) {

  const handleUpClick = ()=>{
    // console.log('Uppercase was clicked'  + text);
    let newText = text.toUpperCase();
    setText (newText)
    props.showAlert("Converted to Uppercase!", "success")
  }
  
  const handleLoClick = ()=>{
    // console.log('Lowercase was clicked'  + text);
    let newText = text.toLowerCase();
    setText (newText)
    props.showAlert("Converted to Lowercase!", "success")
  }

  const handleCopyClick = ()=>{
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard!", "success");
  }

  const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "))
    props.showAlert("Removed extra Spaces!", "success")
  }

  const handleClClick = ()=>{
    // console.log('Lowercase was clicked'  + text);
    let newText = '';
    setText (newText)
    props.showAlert("Text have been Cleared!", "success")
  }

  const handleOnchange = (event)=>{
    // console.log('On change');
    setText(event.target.value);
  }

  const [text, setText] = useState('');

  const textCounter = text.split(/\s+/).filter(word => word.trim() !== '');
  // const wordCount = textCounter.length;
  const characterCount = textCounter.join().length;
  const sentenceArray = text.split(/[.!?]+/).filter(sentence => sentence.trim() !== '');
  const sentenceCount = sentenceArray.length;
  
  // text = 'new text';
  // setText ('new text';)
  return (
    <>
    <div className="container" style={{color: props.mode === 'dark'?'white':'#021942'}}>    
        <h4 className='mb-2' style={{textAlign:"center"}}>{props.heading}</h4>
        <div className="mb-3">
            <textarea className="form-control" style={{backgroundColor: props.mode === 'dark'?'#004768':'white',color: props.mode === 'dark'?'white':'#021942'}} value={text} id="myBox" onChange={handleOnchange} rows="8"></textarea>
        </div>
        <div style={{textAlign:"center"}}>
        <div className="btn btn-primary mx-1 my-1" disabled={text.split() === !0} onClick={handleUpClick}>Convert to Uppercase</div>
        <div className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</div>
        <div className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</div>
        <div className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>Copy Text</div>
        <div className="btn btn-primary mx-1 my-1" onClick={handleClClick}>Clear Text</div>
        </div>
    </div>
    <div className="container my-3"  style={{color: props.mode === 'dark'?'white':'#021942', textAlign:"center"}}>
      <h2>Your text summary</h2>
      <p><b> {sentenceCount} </b> sentences, <b> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} </b> words, <b> {characterCount} </b> characters and <b> {text.split(" ").length - 1} </b> Spaces </p>
      <p></p>
      <p><b> {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} </b> minites read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text: "Write something in the textbox above to preview it"}</p>
    </div>
    </>
  )
}
