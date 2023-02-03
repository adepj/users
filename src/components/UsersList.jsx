import axios from "axios";
import React, { useEffect } from "react";


const UsersList = ({selectuser, users, getUsers}) =>{

    const deleteuser = (users) => {
        axios
          .delete(`https://users-crud.academlo.tech/users/ ${users.id}/`)
          .then(() => getUsers());
      };

return (
    <div className="user-list">
<h1>Users List</h1>
<ul className= "list">
     
 
            <li >
                {users.first_name}
                <div>
                <b>First_name</b></div>
                {users.last_name}
                <div>
                <b>Last_name</b></div>
                {users.email}
                <div>
                <b>E-mail</b></div>
                {users.password}
                <div>
                <b>Password</b></div>
                {users.birthday}
                <div>
                <b>Birthday</b></div>
                <button onClick={()=> selectuser(users)}>Select</button>
                <button onClick={() => deleteuser(users)}>Delete</button>
            </li>
        
    
</ul>
    </div>
)

}

export default UsersList