import {useState,useEffect} from "react"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./Navbar"
function App(){
  const[count,setCount]=useState(0)
  const[color,setColor]=useState(0)
useEffect(()=>{
alert("Hello World")
},[])
useEffect(()=>{ 
  alert(`Count changed changed`);
  setColor(color+1)
   }, [count]);


   //Example of Cleanup function
   useEffect(()=>{
    alert("Hey welcome to my page.This is the first render app.jsx")
    return()=>{
      alert("comonent was unmounted")
    }
   })
   

  return(
   <>
   <Navbar color={Cyn+blue+color}></Navbar>
   <div>
    <a href="http://vitejs.dev" target="_blank">
    <img src={viteLogo} className="logo" alt="Vite logo" /></a>
    <a href="http://react.dev" target="blank">
    <img src={reactLogo} className="logo react" alt="React logo" /></a>
    </div>
    <h1>Vite+React</h1>
    <div className="card">
<button onClick={()=>setCount((count)=>count+1)}>
  count is {count}

</button>
<p>
Edit <code>src/App.jsx</code>and save to test HMR
</p>
    </div>
    <p className="read-the-docs"> Click on the Vite and React logos to learn more</p>
    </>
  )
}
export default App
