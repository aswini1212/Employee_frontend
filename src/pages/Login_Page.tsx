
import Image from '../components/image'
import '/Login.css'
import KVLogo from "../assets/keyvalue_logo.png"
import FrameImage from "../assets/Frame1.png"
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

function Login() {

  const[username,setUsername]=useState("")
  const[password,setPassword]=useState("")
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate=useNavigate()
  const ref=useRef(null)
 

  function handleSubmit(e:React.SubmitEvent<HTMLFormElement>)
  {
    // GETTING USER AND CHECKING FROM LOCAL STORAGE
    // const localuser=localStorage.getItem("email")
    // const localpassword=localStorage.getItem("password")
    // if(username==localuser && localpassword==password)
    // {
    //   console.log("User is matching...redirecting")
    //   navigate("employee/create")
    // }
    // else{
    //   console.log("User is not matching")
    // }
    e.preventDefault()
    navigate("/employee/list")
  }
  function handleUsername(value:string)
  {
    setUsername(value)
    if(!value.includes("@"))
    {
      setUsernameError("Email doesnt contain @")
    }
    else
    {
      setUsernameError("")
    }
  }

  function handlePassword(value:string)
  {
    setPassword(value)
    if(value.length<8)
    {
      setPasswordError("Password should have atleast 8 characters")
    }
    else
    {
      setPasswordError("")
    }
  }
  //USING USEREF TO FOCUS THE INPUTS WHEN THE PAGE LOADS
  useEffect(()=>{
    ref.current?.focus();
    
  },[])



  
  // throw new Error("Error has been thrown from login page")
  return (

      <div className="parent_container"> 
        <div className="main_img_container">
          <Image src={FrameImage} className="image_login"/>
        </div>
        

        <div className="authentication_box">
            <div className="authentication_box_container">
                <Image src={KVLogo} className="keyvalue_logo"/>
              <br/>
            
              <div className="form_div_log">
                  <form className="form" onSubmit={handleSubmit}>
                    <input type="text" name="username" placeholder="UserName" className="username" onChange={(e)=>handleUsername(e.target.value) }  ref={ref}/>
                    {usernameError && <p className="validation_para">{usernameError}</p>}

                    <input type="Password" name="password" placeholder="Password" className="password" onChange={(e)=>handlePassword(e.target.value)} />
                    {passwordError && <p className="validation_para">{passwordError}</p>}

                    <button type="submit" id="login-button">Login</button>
                  </form>
              </div> 
            </div>
        </div>
      </div> 
  
  )
}

export default Login

