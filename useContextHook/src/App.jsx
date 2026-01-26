import React from 'react'
import './App.css'
import ChildA from './Components/ChildA.jsx'
//1.create Context
//const userContext=React.createContext()
//2.Wrap a child inside a provider
//3.Pass value to the provider
//4.Consumer ke ander jake consume kro
const themeContext=createContext()
function  App (){
 //const [user,setUser]=useState({name:"John"})
 const [theme,setTheme]=useState("light")
  return (
    <><themeContext.Provider value={{theme,setTheme}}>
    <div id="container" style={{backgroundColor:theme==='light'?"beige":"black"}}>
      </ChildA>
    </div>
    </themeContext.Provider>
       // <userContext.Provider value={user}>
    //  <ChildA/>
   // </userContext.Provider>
    //</> 
  )
}

export default App
//export {userContext};
export {themeContext};
