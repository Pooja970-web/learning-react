import React from 'react'
import { userContext } from '../App'
import { themeContext } from 'react'

const ChildD = () => {
  //const user=userContext(userContext)
  const [theme,setTheme]=useContext(themeContext)
  function handleClick(){
    if(theme==="light"){
      setTheme("dark")
      else
      setTheme("light")
    }
  const user=userContext()
  return (
    <div>
   <button onClick={}>Change Theme</button>
    </div>
  )
}

export default ChildD
