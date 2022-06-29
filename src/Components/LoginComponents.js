// const renderString = (name) => name === name;
import {useState} from 'react'
import { useNavigate } from "react-router-dom";
import Cookies from 'universal-cookie';

// const database = {
//   username:'admin'
//   ,password:'1234'
// }
const LoginMain = (props) =>{
    const cookies = new Cookies();
    const navigate = useNavigate();
    const [Username,setUser] = useState('')
    const [Pass,setPass] = useState(' ')
    const InputUser = (event)=>{
        setUser(event.target.value)
    }
    const InputPass =(event)=>{
        setPass(event.target.value)
    }
    let ar =[]
    ar = props.items
    const userdataProps = ar.find((number) => {
      return number.username = Username;
    })
    const CheckLogin = (event) => {
        event.preventDefault();
        // const userData = database.find(element => element.username);
        console.log("USERNAME = "+userdataProps.username)
        console.log("Password = "+userdataProps.password)
        if (Username == userdataProps.username )  {
          if (userdataProps.password != Pass) {
            console.log("PASSWORD FAIL")
            alert("PASSWORD FAIL")
          } else {
            console.log("SUCCESS")
            alert("SUCCESS เข้ามาสำเร็จ ")
            cookies.set('user', { Username , t:1})
            navigate("../Dashboard", { replace: true });
          }
        }else {
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