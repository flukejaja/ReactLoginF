// import logo from './logo.svg';
import './App.css';
// import Login from './Components/Login'
import LoginMain from './Components/LoginComponents';
// import DatabaseAr from './Components/DatabaseComponent';
import RegisterAr from './Components/RegisterComponent';
// import DataContext from './Components/DataContext';
import { BrowserRouter as Router,Route,Link,Routes} from 'react-router-dom';
import { useState } from 'react';
import Dashboard from './Components/DashboardComponents';
import Cookies from 'universal-cookie';

function App() {
  const [items,setitems] = useState([])
  const onAddNewItem = (newItem)=>{
    setitems((prevItem)=>{
      return [newItem,...prevItem]
    })
  }
  const cookie = new Cookies();
  const user = cookie.get('user')
  return ( 
      
    <div>
      
      <Router>
        {(!user) ? null :
      <div align ="center">
        <ul>
        <Link to="/">Home</Link>
        </ul>
        <ul>
        <Link to="/register">สมัครสมาชิก</Link>
        </ul>
        <ul>
        <Link to="/login">LOGIN</Link>
        </ul>
      </div>}
      <Routes> 
      <Route path="/register" element={<RegisterAr onAddItem={onAddNewItem}/>} />
      {/* <Route path="/register" element={<RegisterAr Data={database}/>} /> */}
      <Route path="/login" element={<LoginMain items={items}/>} />
      <Route path="/Dashboard" element={<Dashboard userProfile={items}/>} />
      </Routes>
      </Router>
      
    </div>
    
  );
}

export default App;
