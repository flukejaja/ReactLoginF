import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
 const  Dashboard  =(props)=>{   
  const navigate = useNavigate();
  const cookies = new Cookies();
  const user = cookies.get('user')
        if (!user) {
            navigate("/login", { replace: true });
        }
   const {userProfile} = props
    // let itemsToRender ;
    let ar = userProfile
    const UpRender = ar.find(item => {
      return item.id == 1
    });

   const logOutChange = (event) =>{
    event.preventDefault();
    cookies.remove("user");
    console.log("hallo")
    navigate("/ ", { replace: true });
   }
    return (
    <div align="center">
<form onSubmit={logOutChange}>
<table>
    <thead>
    <tr>
    <th>ID</th>
    <th>Username</th>
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Email</th>
    <th>Age</th>
  </tr>
    </thead>
 <tbody>
 <tr>
    <td>{UpRender.id}</td>
    <td>{UpRender.username}</td>
    <td>{UpRender.fristname}</td>
    <td>{UpRender.lastname}</td>
    <td>{UpRender.email}</td>
    <td>{UpRender.age}</td>
  </tr>
 </tbody>
</table>
<input type="submit" value="LOGOUT"></input>
</form>
    </div>
)
}
export default Dashboard