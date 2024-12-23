import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("#FFFFFF")

  function handleColourChange(event){
    setColor(event.target.value)
  }

  return (
<div className="colorpicker-container">
<h1 style={{color:color}}>Colour Picker</h1>
<div className="color-display" style={{backgroundColor:color}}>
<p>selected color:{color}</p>
</div>

<label > Select Your color:</label>
<input type="color"  value={color} onChange={handleColourChange}/>

</div>  )
}

export default App
