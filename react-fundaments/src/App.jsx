import "./App.css"
import { useState } from "react";

// import ButtonClick from "./ButtonClick.jsx"

function App() {
  // const [count,setCount]=useState(0)
  // const [email,setEmail]=useState("")
  // const [password,setPassword]=useState("")
  const [formData,setFormData]=useState({
    email:"",
    password:""
})


  // const handleIncrement=()=>{
  //   setCount((prevCount)=>prevCount+1)
  //   console.log(count)
  // }
  // const handleClick=(name)=>{
  // console.log("u clicked the button")
  //   alert("   "+name);
  // }


  const handleChange=(e)=>{
    // console.log(e.target.name)
    // console.log(e.target.value)
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    })
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    alert(`Email: ${formData.email} \nPassword: ${formData.password} \nyou are logged in  `)
  }
  const handleEmail=(a)=>{
    setEmail(a.target.name)
  }
  const handlePassword=()=>{
    setPassword(a.target.value)
  }


  return (


    <div>
      <form onSubmit={handleSubmit}>
      <p>i am urs</p>
      <input type="text" name="EMAIL" 
      placeholder="email enter cheyra"
      onChange={handleChange} />
      <input
      type="password" name="password"
      placeholder="password type cheyra.."
            onChange={handleChange} />


      <button type="submit">login</button>
      </form>
      {/* <p>{count}</p>
      <button onClick={handleIncrement}>Increment</button> */}



      {/* <button onClick={()=>handleClick("i love u")}>hello</button> */}

    
    </div>
  )
}

export default App;
