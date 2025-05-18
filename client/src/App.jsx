import { use, useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/users')
      .then(res => setUsers(res.data))
      .catch(err=> console.error(err));
  }, []);

  return (
    <>
      {users.map( data => (
       <ul key={data.id}>
        <li >Name : { data.name}</li>
        <li> Email: {data.email}</li>
        <li> Phone No: {data.phone}</li>
       </ul>
      ))}
    </>
   
  );
}

export default App;
