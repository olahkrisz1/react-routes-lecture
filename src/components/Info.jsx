import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const Info = () => {
  let params = useParams();
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      .then((result) => {
        console.log(result.data);
        setUser(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params.id]);

  return (
    <div>
      <Link to="/">back to home</Link>
      <hr />
      {user ? (
        <div>
          <h4>{user.website}</h4>
          <h1>{user.name}</h1>
          <h3>{user.username}</h3>
          <p>email:{user.email}</p>

          {user.address ? (
            <div>
              <p>address:{user.address.street}</p>
              <p>City:{user.address.city}</p>
            </div>
          ) : null}

          <h5>phone:{user.phone}</h5>
        </div>
      ) : null}
    </div>
  );
};

export default Info;
