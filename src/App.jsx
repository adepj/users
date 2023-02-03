
import axios from "axios";
import UsersForm from './components/UsersForm'
import './App.css'
import { useEffect, useState } from 'react'
import UsersList from './components/UsersList'

function App() {
  const [user, setusers] = useState([])
  const [ userSelected, setuserSelected, deselectuser ] = useState(null)
  
  useEffect(() => {
    axios.get('https://users-crud.academlo.tech/users/') 
    .then(res=> setusers(res.data))
  }, [])

  const getUsers = () => {
    axios.get('https://users-crud.academlo.tech/users/') 
    .then(res => getUsers (res.data))
  }
 const selectuser = (user) => {
  setuserSelected(user)
 }
 return (
  <div className="App">
       <UsersForm getUsers = {getUsers} 
       userSelected = {userSelected}
       deselectuser = {deselectuser}
       selectuse = {selectuser}
       />
         <UsersList selectuser = {selectuser} users = {user} getUsers = {getUsers}/>
      
    </div>
  )
}

export default App
