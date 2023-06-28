import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const HomePage = () => {
    const [allUsers, setAllUsers] = useState([])
   useEffect( () =>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(result =>{
          setAllUsers(result.data)
    })
    .catch (err =>{
        console.log(err)
    })
   })




  return (
    <div>
       <h3>List of all users</h3>
        <ol>
            {
                allUsers && allUsers.map( user =>{
                    return(
                        <Link to={`/user-info/${user.id}`} key={user.id}>
                        <li>
                            <h4>{user.name}</h4>
                        </li>
                        </Link>
                    )
                })
            }
        </ol>
    </div>
  )
}

export default HomePage