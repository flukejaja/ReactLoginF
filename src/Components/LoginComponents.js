// const renderString = (name) => name === name;
import {useState} from 'react'

const database =[
    {
        username:"admin",
        password:"1234",
    },
]
const LoginMain = () =>{
    const [Username,setUser] = useState('')
    const [Pass,setPass] = useState(0)
    const InputUser = (event)=>{
        setUser(event.target.value)
    }
    const InputPass =(event)=>{
        setPass(event.target.value)
    }
    const CheckLogin = (event) => {
        //Prevent page reload
        event.preventDefault();
      
      
        // Find user login info
        
        const userData = database.find(element => element.username);
        console.log("USERNAME = "+userData.username)
        console.log("Password = "+userData.password)
        // Compare user info
        if (Username === userData.username )  {
          if (userData.password !== Pass) {
            // Invalid password
            console.log("PASSWORD FAIL")
            alert("PASSWORD FAIL")
          } else {
            console.log("SUCCESS")
            alert("SUCCESS เข้ามาสำเร็จ ")
          }
        }else {
          // Username not found
          console.log("USERNAME FAIL")
          alert("USERNAME FAIL")
        }
      };
    return (
        <div align = "center">
            <form onSubmit={CheckLogin}>
        <div>
        <label>USERNAME</label>
        <input type="text" name="uname" required onChange={InputUser} />
        </div>
       <div>
       <label>PASSWORD</label>
          <input type="password" name="pass" required  onChange={InputPass} />
       </div>
       <input type="submit" value="Login"></input>
          </form>
    </div>
    )
}
export default LoginMain