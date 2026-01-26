import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
function App() {
  const [count, setCount] = useState(0);
  // const [name, setname] = useState("Harry")
  const [form, setForm] = useState({name:"",phone:""})
  const handleClick=()=>{alert("Hey i an clicked")}
  const handleMouseOver=()=>{alert("Mouse is over the red box")}
  const handleChange=(e)=>{
   // setname(e.target.value)
   setForm({...form,[e.target.name]:e.target.value})
   console.log(form);
  }
  return(
    <>  
    <div className="buttons">
      <button onClick={handleClick}>Click me</button>
    </div>
{/*<div className="red" onMouseOver={handleMouseOver}>I am A red div</div>*/}
<input type="text" name="email" value={form.email?form.email:""} onChange={handleChange} />
<input type="text" name="phone" value={form.phone?form.phone:""} onChange={handleChange} />
    </>
  )}
  export default App