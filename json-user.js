import { useState } from 'react';
import './json-user.css';
import datas  from './data/db.json'

function App() {

  const [user,setUser] = useState(datas)
  const [search,setSearch] = useState("")

  const searchUser = (e)=>{
     const value = e.target.value
     setSearch(value)
  }


  return (
    <div className='container'>
       <h2>filter table</h2>
       <p>this is just a 100 json data</p>
       <input type="search" id='search' value={search} placeholder='Search here' onChange={(e)=>searchUser(e)
       } autoComplete='off'/>
       <table>
           <thead>
            <tr>
            <th>s.no</th>
              <th>firstname</th>
              <th>lastname</th>
              <th>email</th>
              <th>phone</th>
            </tr>   
           </thead>
           <tbody>
              {user && user.filter((use)=>(
                use.first_name.toLowerCase().includes(search.toLowerCase()) ||
               use.last_name.toLowerCase().includes(search.toLowerCase()) || 
               use.email.toLowerCase().includes(search.toLowerCase()) ||
                use.phone.includes(search))).map((data,index)=>(
                 <tr key={data.id}>
                    <td>{index+1}</td>
                    <td>{data.first_name}</td>
                    <td>{data.last_name}</td>
                    <td>{data.email}</td>
                    <td>{data.phone}</td>
               </tr>
              ))}
           </tbody>
       </table>
       
    </div>
  );
}

export default App;
